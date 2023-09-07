const express = require("express");
const app = express();

const routes = require("./config/allRoutes")

app.use(express.static(__dirname+"/assets"));

app.use(express.json()); // reading data comming from html form
app.use(express.urlencoded({ extended : true })); // reading data comming from parameterized url

app.set("view engine", "ejs")

app.use(routes)



const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("server running");
})