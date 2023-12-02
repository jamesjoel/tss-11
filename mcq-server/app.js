const express = require("express");
const app = express(); // call the express constructor

const cors = require("cors");


app.use(express.json());
app.use(express.urlencoded({ extended  : true }));
app.use(cors());

app.use("/api/question", require("./controller/QueController"));

const port = process.env.PORT || 8080;
app.listen(port, ()=>{
    console.log("Server Running ", port);
})