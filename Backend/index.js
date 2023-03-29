const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config()
const port = process.env.PORT || 8081;
const {connection} = require("./config/db");
const {userRoute} = require("./routes/user.routes");
const cors = require('cors');


app.use(cors({
    origin: "*"
}));

app.use('/users', userRoute);

app.listen(port,async () => {
    try {
        await connection;
        console.log("Connection established with database");
    } catch (error) {
        console.log(error);
        
    }
    console.log(`listening on http://localhost:${port}`)
});
