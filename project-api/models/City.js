require("../config/db");
const mongoose = require("mongoose");

const CitySchema = mongoose.Schema({
    id : String,
    name : String,
    state : String
}, {collection : "city"});

module.exports = mongoose.model("city", CitySchema);