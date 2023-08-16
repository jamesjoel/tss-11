const express = require("express");

const app = express.Router();

const Student = require("../models/Student");

app.get("/add", (req, res)=>{

    res.render("pages/student-add")
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

module.exports = app;
