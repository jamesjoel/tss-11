require("../config/db");

const mongoose = require("mongoose")
let CitySchema = mongoose.Schema({
    id : String,
    name : String,
    state : String
}, {collection : "city"})


let CityModel = mongoose.model("city", CitySchema); // cities

module.exports = CityModel;