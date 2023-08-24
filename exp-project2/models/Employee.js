const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/tss3_30");

const EmpSchema = mongoose.Schema({
    name : String,
    salary : String,
    department : String,
    gender : String,
    address : String
})

module.exports = mongoose.model("employee", EmpSchema);
