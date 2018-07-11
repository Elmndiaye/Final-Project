import React from 'react';
import {Route, Switch}from "react-router-dom";
import homePage from './components/pages/homepage';
import loginPage from "./components/pages/login";
// import signUp from './components/pages/signup';
// import routes from '../routes/routes';
// import redirect from '../routes/redirect'
//import post from '../db/models/post';
//import users from '../db/models/users';
// import PostData from './PostData';
//import createUsers from '../db/migrations/createUsers';
// import apiRoute from './routes/apiRoute';

// import React {BrowserRouter as Router, Route} from "react-router-dom";
//import "semantic-ui-css/semantic.min.css";

const App = () => (
      <Switch>
        <Route exact path="/" component={homePage}/>
        <Route exact path="/pages" component={homePage}/>
        <Route exact path="/login" component={loginPage}/>
      </Switch>
    
   
);

export default App;
