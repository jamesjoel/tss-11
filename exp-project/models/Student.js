const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/tss3_30")
const StudentSchema = mongoose.Schema({
    fullname : String,
    address : String,
    class : String,
    gender : String,
    city : String,
    contact : String
})
const Student = mongoose.model("student", StudentSchema);
module.exports = Student;

/*
    [[1,2], [3,4], [5,6]]

    [1,2,3,4,5,6]

*/