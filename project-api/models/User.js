require("../config/db");

const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    fullname : String,
    email : String,
    password : String,
    address : String,
    contact : String,
    city : String,
    gender : String
    
})

module.exports = mongoose.model("user", UserSchema);