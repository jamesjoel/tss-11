const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res)=>{
    

    let obj = { name : "James", city : "indore" };
    
    
    res.render("home", obj);
})


app.get("/about", (req, res)=>{
    let color = ["red", "green", "blue", "yellow", "pink"];
    let obj = { color : color };
    res.render("about", obj);
})




app.get("/contact", (req, res)=>{
    let users = [
        {
            name : "rohit",
            age : 25,
            city : "indore"
        },
        {
            name : "amar",
            age : 22,
            city : "mumbai"
        },
        {
            name : "jaya",
            age : 20,
            city : "pune"
        },
        {
            name : "nidhi",
            age : 27,
            city : "delhi"
        },
        {
            name : "vijay",
            age : 22,
            city : "indore"
        },
        {
            name : "raj",
            age : 24,
            city : "mumbai"
        },
        {
            name : "nilesh",
            age : 20,
            city : "indore"
        }
    ]

    let obj = { users : users };

    res.render("contact", obj);
})
app.get("/help", (req, res)=>{
    res.render("about");
})

app.listen(3000, ()=>{
    console.log("Server Running");
});