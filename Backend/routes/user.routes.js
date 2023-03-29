const express = require('express');
const userRoute = express.Router();
const {signupHandler} = require("../controllers/signupHandler.controller");
const {loginHandler} = require("../controllers/loginHandler.controller");


userRoute.post("/signup", signupHandler);
userRoute.post("/login", loginHandler);


module.exports ={
    userRoute
}