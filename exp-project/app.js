const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/assets`));

app.use(express.json());
app.use(express.urlencoded({ extended : true }));

app.get("/", (req, res)=>{
    res.render("pages/home");
})

app.get("/about", (req, res)=>{
    res.render("pages/about");
})

app.get("/contact", (req, res)=>{
    res.render("pages/contact")
})


const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("Server Runngin With PORT - ", port);
})