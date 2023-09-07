const app = require("express").Router();

// localhost:3000

app.get("/", async (req, res)=>{
    res.render("pages/home")
})

module.exports = app;