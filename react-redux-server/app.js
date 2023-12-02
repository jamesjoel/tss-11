const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
mongoose.connect("mongodb://0.0.0.0:27017/tss3_30");

let TeachScema = mongoose.Schema({
    name : String,
    salary : Number
})

let Teach = mongoose.model("teach", TeachScema);


app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended : true }))

app.get("/api/teach", async(req, res)=>{
    // console.log(req.body);
    let result = await Teach.find();
    
    res.send(result);
})
app.post("/api/teach", async(req, res)=>{
    // console.log(req.body);
    let result = await Teach.create(req.body);
    console.log(result);
    res.send(result);
})
app.delete("/api/teach/:id", async(req, res)=>{
    let id = req.params.id;
    let result = await Teach.deleteMany({_id : id });
    res.send(result);
})

app.listen(8080, ()=>{
    console.log("server running");
})