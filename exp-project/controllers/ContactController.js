const express = require("express");

const app = express.Router();

const Collage = require("../models/Collages")

app.get("/", async (req, res)=>{
    let result = await Collage.find();
    let obj = { collage_data : result}
    res.render("pages/contact", obj)
})

module.exports = app;
