const router = require(“express”).Router();

//sign up, new login route for local and google
const usersRoutes = require(“./users”);

router.use(“/user”, usersRoutes);


module.exports = router;