// connection code start
const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/tss3_30");
// connection code code

// schema code start
const postSchema = mongoose.Schema({
    userId : Number,
    id : Number,
    title : String,
    body : String
})
// schema code end

// model code

module.exports = mongoose.model("post", postSchema)