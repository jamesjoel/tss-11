const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res)=>{
    let name = "rohit verma";
    let age = 25;

    let fullname = "James Joel";
    let email = "james@gmail.com";

    let obj = { a : name, b : age, fullname : fullname, email : email};

    res.render("home", obj);
})


app.listen(3000, ()=>{
    console.log("server running");
})