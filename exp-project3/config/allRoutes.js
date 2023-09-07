const app = require("express").Router();

app.use("/", require("../controllers/HomeController"));
app.use("/posts", require("../controllers/PostsController"));

module.exports = app;