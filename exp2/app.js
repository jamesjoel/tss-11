let express = require("express");
let app = express();

app.get("/", (req, res)=>{
    let name = "rohit";
    res.sendFile(`${__dirname}/home.html`)
})
app.get("/about", (req, res)=>{
    res.sendFile(`${__dirname}/about.html`)
})


app.get("/xyz", (req, res)=>{
    res.sendFile(`${__dirname}/abc.html`)
})

app.listen(3000, ()=>{
    console.log("Server Running");
});