require("../config/db");

const mongoose = require("mongoose");

module.exports = mongoose.model("stu", mongoose.Schema({
    name : String,
    age : Number, 
    fee : String
}))