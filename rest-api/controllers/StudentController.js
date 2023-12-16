const routes = require("express").Router();
const Stu = require("../models/Student");

routes.post("/", async(req, res)=>{
    await Stu.create(req.body);
    res.send({success : true});
})
routes.get("/", async(req, res)=>{
    let result = await Stu.find();
    res.send({success : true, result : result});
})
routes.get("/:id", async(req, res)=>{
    let result = await Stu.find({_id : req.params.id});
    res.send({success : true, result : result });
})
routes.put("/:id", async(req, res)=>{
    await Stu.updateMany({_id : req.params.id},req.body);
    res.send({success : true});
})
routes.delete("/:id", async(req, res)=>{
    await Stu.deleteMany({_id : req.params.id});
    res.send({success : true});
})

module.exports = routes;