const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/tss3_30");

const QueSchema = mongoose.Schema({
    id : Number,
    que : String,
    ans1 : String,
    ans2 : String,
    ans3 : String,
    ans4 : String,
    correct_ans : String,
}, {collection : "question"});

module.exports = mongoose.model("question", QueSchema);