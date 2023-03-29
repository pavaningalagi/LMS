const express = require('express');
const {user_module} = require("../modules/user.module");
const bcrypt = require('bcrypt');


const signupHandler = async(req,res) =>{
    const data = req.body;
   try {
    const user = await user_module.findOne({email: data.email});
    if(user){
        // console.log('user found');
        res.send("This user is already exist please log in")
    }else{
        // console.log('user not found');
        const saltRounds = 10;
        const myPlaintextPassword = data.password;
        // console.log(myPlaintextPassword);
        bcrypt.hash(myPlaintextPassword, saltRounds, async function(err, hash) {
            // Store hash in your password DB.
            if (err) throw err;
            const newUser = new user_module({name:data.name, email:data.email, password:hash});
            await newUser.save();
        });
    }
    res.send("User registered successfully");
   } catch (error) {
        res.send({"error": error.message});
   }
    
};


module.exports ={
    signupHandler
}