require('dotenv').config();
const express = require("express");
const next = require('next');
const GoogleStrategy = require ('passport-google-oauth20').Strategy;
const passport = require('passport');
const bodyParser = require("body-parser");
const session = require('express-session');
const sessionStore = require('connect-session-sequelize');
var db = require('../db');
// const routes = require("./routes");
const PORT = process.env.PORT || 3000;

const dev = process.env.NODE_ENV || 'development';
const app = next({ dev }); 
const handle = app.getRequestHandler()

passport.use (
    new GoogleStrategy(
        {
        clientID: process.env.GOOGLE_CLIENT_ID=1234,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL:  process.env.GOOGLE_CALLBACK_URL
        },
    (accessToken, refreshToken, profiles, cb) => {
        db.User
        .findOrCreate({
            where: { googleId: profile.id }
        })
        .then((users, created) => {
            return cb(null, { user: users[o].get(), profile })
        })

    }
))



passport.serializeUser(function(obj, cb) {
    cb(null, obj)
})

passport.deserializeUser(function(obj, cb) {
    cb(null, obj)
})


// next is an app
//session storage

app 
    .prepare()
    .then(() => {
    const server = express ()
    const sequelizeStore = new (sessionStore(session.Store))({
        db: db.sequelize
    })

server.use(bodyParser.urlencoded({ extended: true}));
server.use(
    session({
        secret: 'pain',
        store: sequelizeStore,
        cookie: { maxAge: 334456577 },
        resave: false,
        saveUnitialized: false
    })
)
server.use(passport.initialize())
server.use(passport.session())
server.use(function(err, req, res, next){
    console.error(err.stack)
    res.status(500).send('watch wyc!')

})

//connect the database
sequelizeStore.sync()
//express is a server
server.get(
  '/login',
  passport.authenticate('google', {
      scope: ['email', 'profile', 'http://www.googleapis.com/auth/']
  })  
)

server.get(
    '/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login'}),
    (req, res) => {
        res.redirect('/dashboard')
    }
)

server.get('/dashboard', (req, res)=> {
    console.log(req.session)
    app.render( '/dashboard', { data: req.user })
})

//SSR FOR EVENTS
server.get('/event/:name', (req, res)=> {
    app.render('/events', { data: req.user })

})


server.get('*', (req, res)=> handle (req, res))

server.listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
})
})
.catch(ex => {
    console.error(ex.stack)
    process.exit[1]
})


