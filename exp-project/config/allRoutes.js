const express = require("express");

const app = express.Router(); // CALLING THE EXPRESS ROUTER FUNCTION


app.use("/", require("../controllers/HomeController"));
app.use("/about", require("../controllers/AboutController"))
app.use("/contact", require("../controllers/ContactController"))
app.use("/student", require("../controllers/StudentController"))
app.use("/help", require("../controllers/HelpController"));


module.exports = app;