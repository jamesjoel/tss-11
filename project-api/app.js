const express = require("express");
const app = express();
const routes = require("./routes/allRoutes");
const cors = require("cors");
// this code for live server
const root = require("path").join(__dirname, "build");

// define root ver into express static fun
app.use(express.static(root));
app.use(express.json());
app.use(express.urlencoded({ extended : true}));
app.use(cors());

app.use(routes);

// all routes
app.get("*", (req, res)=>{
    res.sendFile("index.html", {root});
})


const port = process.env.PORT || 8080;
app.listen(port, ()=>{
    console.log("server running with port ", port);
})