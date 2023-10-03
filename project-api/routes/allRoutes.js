const routes = require("express").Router();

// localhost:8080/api/signup
routes.use("/api/signup", require("../controllers/SignupController"));
routes.use("/api/city", require("../controllers/CityController"));
routes.use("/api/demo", require("../controllers/DemoController"));
routes.use("/api/category", require("../controllers/CategoryController"));
routes.use("/api/product", require("../controllers/ProductController"));

// localhost:8080/api/city

module.exports = routes;