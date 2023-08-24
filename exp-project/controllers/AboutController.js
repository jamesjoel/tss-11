
const express = require("express");

const app = express.Router();

app.get("/:a/:b", (req, res)=>{

    let x = req.params.a;
    let y = req.params.b;
    console.log(x, y);

    res.render("pages/about");
})

module.exports = app;