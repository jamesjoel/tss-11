const express = require("express");
const app = express(); // call the express constructor

const mongoose = require("mongoose");
// we have to stabled connect with mongodb by mongoose
mongoose.connect("mongodb://0.0.0.0:27017/tss3_30");

let TeacherSchema = mongoose.Schema({
    name : String,
    salary : Number,
    gender : String
}) 

let abc = mongoose.model("teacher", TeacherSchema);


let EmpSchema = mongoose.Schema({
    fullname : String,
    salary : Number,
    department : String,
    address : String,
    gender : String,
    city : String
})


let Employee = mongoose.model("employee", EmpSchema)

app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/assets`));

app.use(express.json());
app.use(express.urlencoded({ extended  : true }));


app.get("/", (req, res)=>{
    res.render("pages/home");
})
app.get("/about", (req, res)=>{
    res.render("pages/about");
})
app.get("/teacher/add", (req, res)=>{
    res.render("pages/teacher-add");
})
app.get("/teacher/view", (req, res)=>{
    res.render("pages/teacher-view");
})


app.post("/teacher/save", (req, res)=>{
    abc.create(req.body);
})


app.post("/employee/add", (req, res)=>{
    Employee.create(req.body);
    res.redirect("/");
})


const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("Server Running ", port);
})