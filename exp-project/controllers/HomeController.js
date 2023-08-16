const express = require("express");

const app = express.Router();

app.get("/", (req, res)=>{
    res.render("pages/home");
})

module.exports = app;
