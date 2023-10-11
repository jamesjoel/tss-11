const routes = require("express").Router();
const Admin = require("../models/Admin");
const sha1 = require("sha1");
const jwt = require("jsonwebtoken")
routes.post("/", async(req, res)=>{
    let u = req.body.username;
    let p = req.body.password;
    let result = await Admin.find({ username : u });
    if(result.length > 0)
    {
        if(result[0].password == sha1(p))
        {
            let obj = { id : result[0]._id};
            let token = jwt.sign(obj, "hello");
            res.send({ success : true, token : token });
        }
        else{
            res.send({ success : false, type : 2 })
        }
    }
    else{
        res.send({ success : false, type : 1 });
    }

})

module.exports = routes;