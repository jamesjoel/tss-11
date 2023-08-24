const app = require("express").Router();

app.use("/", require("../controllers/HomeController"));
app.use("/employee", require("../controllers/EmployeeController"));

module.exports = app;