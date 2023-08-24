const app = require("express").Router();

app.get("/", (req, res)=>{
    res.render("pages/home");
})

module.exports = app;