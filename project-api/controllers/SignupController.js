const routes = require("express").Router();
const User = require("../models/User");
const sha1 = require("sha1")
const Cart = require("../models/Cart");

routes.post("/", async(req, res)=>{
    delete req.body.repassword;

    req.body.password = sha1(req.body.password);

    let result = await User.create(req.body);
    console.log(result, "-------");

    
    res.send({ success : true });
})

module.exports = routes;