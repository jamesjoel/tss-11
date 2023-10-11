const routes = require("express").Router();
const User = require("../models/User");
const sha1 = require("sha1")
const jwt = require("jsonwebtoken");

routes.post("/", async(req, res)=>{
    let u = req.body.username; // rohit@gmail.com, hh@gg@.com
    let p = req.body.password;

    let result = await User.find({ email : u });
    if(result.length > 0) // that means username/email is correct
    {
        if(result[0].password == sha1(p))
        {
            let userobj = { id : result[0]._id };
            let token = jwt.sign(userobj, "hello");
            console.log(token);
            res.send({ success : true, token : token, name : result[0].name, email : result[0].email }) 
        }
        else{
            res.send({ success : false, type : 2 }) 
        }
    }
    else{ // that means username/email is incorrect
        res.send({ success : false, type : 1 })
    }

})

module.exports = routes;