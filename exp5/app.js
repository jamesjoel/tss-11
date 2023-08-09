const express = require("express");
const app = express();

app.set("view engine", "ejs");
// app.use(express.static(__dirname+"/assets"));
app.use(express.static(`${__dirname}/assets`));

app.use(express.json())
app.use(express.urlencoded({ extended : true }))


app.get("/", (req, res)=>{
    res.render("home");
})
app.get("/about", (req, res)=>{
    res.render("about");
})

app.post("/save", (req, res)=>{
    console.log(req.body);
})


app.get("/contact", (req, res)=>{
    res.render("contact");
})

app.get("/addstudent", (req, res)=>{
    res.render("addstu");
})

app.listen(3001, ()=>{
    console.log("server running");
})