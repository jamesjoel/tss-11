const routes = require("express").Router();
const Product = require("../models/Product");

routes.get("/", async(req, res)=>{
    let result = await Product.find();
    res.send(result);
})
routes.post("/", async(req, res)=>{
    await Product.create(req.body);
    res.send({success : true});
})

module.exports = routes;