const routes = require("express").Router();

// localhost:8080/api/signup
routes.use("/api/signup", require("../controllers/SignupController"));

module.exports = routes;