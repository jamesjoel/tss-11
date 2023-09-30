const routes = require("express").Router();
const Demo = require("../models/Demo")

routes.get("/category", async(req, res)=>{
    let result = await Demo.distinct("category");
    res.send(result);
})
routes.get("/sub_category/:a", async(req, res)=>{
    let result = await Demo.find({ category : req.params.a }).distinct("sub_category")
    res.send(result);
})

module.exports = routes;