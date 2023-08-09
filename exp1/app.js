let express = require("express");
let app = express();
let cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended : true }));
app.use(express.json());

app.get("/api/auth", (req, res)=>{
    console.log(req.headers['authorization']);
})

app.listen(8080, ()=>{
    console.log("-------------- Server Running");
});




// let name1 = "rohit varma";
// let city = "indore";




// // let str = "your name is "+name1+ " your city is "+city;

// let str = `your name is ${name1} your city is ${city}`;



