const routes = require("express").Router();

// localhost:8080/api/signup
routes.use("/api/signup", require("../controllers/SignupController"));
routes.use("/api/city", require("../controllers/CityController"));

// localhost:8080/api/city

module.exports = routes;