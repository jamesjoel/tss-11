let express = require("express");
let app = express();

app.get("/", (req, res)=>{
    let name = "rohit";
    res.sendFile(`${__dirname}/home.html`)
})

app.get("/api/data", (req, res)=>{
    res.send({ name : "rohit"})
})

app.get("/about", (req, res)=>{
    res.sendFile(`${__dirname}/about.html`)
})


app.get("/xyz", (req, res)=>{
    res.sendFile(`${__dirname}/abc.html`)
})

app.listen(8080, ()=>{
    console.log("Server Running");
});