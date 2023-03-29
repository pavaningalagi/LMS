const express = require('express');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 8081;
const {connection} = require("./config/db");

app.post('/signup', (req, res) =>{
    res.send("Welcome");
});
app.post('/login', (req, res) =>{
    res.send("Welcome");
});

app.listen(port,async () => {
    try {
        await connection;
        console.log("Connection established with database");
    } catch (error) {
        console.log(error);
        
    }
    console.log(`listening on http://localhost:${port}`)
});
