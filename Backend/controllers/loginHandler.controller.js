const express = require('express');
const {user_module} = require("../modules/user.module");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const loginHandler = async(req,res) =>{
    const data = req.body;
    console.log(data);
    try {
        const saltRounds = 10;
        const myPlaintextPassword = data.password;
        const userData = await user_module.findOne({email:data.email} || {name:data.name});
        if(userData){
            const hash = userData.password;
            bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
                if(result) {
                // result == true
                jwt.sign({ serID: userData._id }, "privateKey", function(err, token) {
                    // console.log(token);
                    // console.log(result);
                res.send({"msg":"Welcome to Sapient training",
            "token": token});
                  });
                }else{
                    res.send({"msg":"Invalid credentials"});
                }
            });
            
        }else{
            res.send("Please Sign up");
        }
        
    } catch (error) {
        res.send({"error": error.message});
    }

};


module.exports ={
    loginHandler
}