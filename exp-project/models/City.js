const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/tss3_30");

let CitySchema = mongoose.Schema({
    id : String,
    name : String,
    state : String
}, {collection : "city"})

let City = mongoose.model("city", CitySchema);

module.exports = City;