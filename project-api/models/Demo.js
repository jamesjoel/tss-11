require("../config/db");

const mongoose = require("mongoose")
let DemoSchema = mongoose.Schema({
    title : String,
    category : String,
    sub_category : String
}, {collection:"demo"});


let DemoModel = mongoose.model("demo", DemoSchema); // cities

module.exports = DemoModel;