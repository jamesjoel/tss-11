const express = require("express");

const app = express.Router();

const Student = require("../models/Student");
const City = require("../models/City");

app.get("/add", async (req, res)=>{
    let result = await City.find();
    let obj = { city : result };
    res.render("pages/student-add", obj)
})



app.get("/list", async (req, res)=>{

    let result = await Student.find();

    let obj = { students : result };

    res.render("pages/student-list", obj)
})

app.post("/save", async(req, res)=>{
    //console.log(req.body);
    await Student.create(req.body);
    res.redirect("/student/list");
})


app.get("/delete/:a", async(req, res)=>{
    let x = req.params.a;
    await Student.deleteMany({ _id : x });
    res.redirect("/student/list");
})

app.get("/edit/:a", async(req, res)=>{
    let x = req.params.a;
    let result2 = await Student.find({ _id : x});
    //console.log(result2);
    let result = await City.find();
    let obj = { city : result, data : result2[0] };
    res.render("pages/student-edit", obj);
})

app.post("/update/:x", async(req, res)=>{
    let a = req.params.x;
    // console.log(req.body)
    // await Student.updateMany({ _id : req.body.id}, req.body);
    await Student.updateMany({ _id : a}, req.body);
    res.redirect("/student/list")
})

module.exports = app;
