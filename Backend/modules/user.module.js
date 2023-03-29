const mongoose = require('mongoose');

const user_schema = mongoose.Schema({
    "name":{type:String, required:true},
    "email": {type:String, required:true},
    "password": {type:String, required:true}
});

const user_module = mongoose.model('User',user_schema);


module.exports = {
    user_module
}