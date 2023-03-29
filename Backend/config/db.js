const mongoose = require("mongoose");
require('dotenv').config();
const mongodb = process.env.mongodb;

const connection = mongoose.connect(mongodb);

module.exports = {
    connection
}