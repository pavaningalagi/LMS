const express = require('express');
const userRoute = express.Router();
// userRoute.use(express.json());
const {signupHandler} = require("../controllers/signupHandler.controller");
const {loginHandler} = require("../controllers/loginHandler.controller");


userRoute.post("/signup", signupHandler);
userRoute.post("/login", loginHandler);


module.exports ={
    userRoute
}