const routes = require("express").Router();
const City = require("../models/City")
// localhost:8080/api/city/getcity
routes.get("/getcity/:a", async(req, res)=>{
    let result = await City.find({ state : req.params.a});
    res.send(result);
})
// localhost:8080/api/city/state
routes.get("/state", async(req, res)=>{
    let result = await City.distinct("state");
    res.send(result);
})

module.exports = routes;