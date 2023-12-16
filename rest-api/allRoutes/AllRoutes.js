const routes = require("express").Router();

routes.use("/api/student", require("../controllers/StudentController"));

module.exports = routes;