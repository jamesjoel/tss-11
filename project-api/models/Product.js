require("../config/db");

const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    title : String,
    price : Number,
    category : String,
    detail : String,
    discount : Number,
    date : { type : Date, default : new Date() }
})

module.exports = mongoose.model("product", ProductSchema);