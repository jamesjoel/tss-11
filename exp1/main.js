let express = require("express");
let app = express();

app.get("/", (req, res)=>{
    // res.sendFile(__dirname+"/home.html");
    res.sendFile(`${__dirname}/home.html`);
})


app.get("/about", (req, res)=>{
    res.sendFile(`${__dirname}/about.html`);
})


app.listen(3000, ()=>{
    console.log("-------------- Server Running");
});




// let name1 = "rohit varma";
// let city = "indore";




// // let str = "your name is "+name1+ " your city is "+city;

// let str = `your name is ${name1} your city is ${city}`;



