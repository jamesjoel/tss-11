const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/tss3_30");

const CollageSchema = mongoose.Schema({
    university : String,
    college : String,
    college_type : String,
    state : String,
    district : String
})

const college = mongoose.model("collage", CollageSchema);
module.exports = college;

