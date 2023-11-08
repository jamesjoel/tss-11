const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const sha1 = require("sha1");
const jwt = require("jsonwebtoken")

mongoose.connect("mongodb://0.0.0.0:27017/tss3_30");
const UserModel = mongoose.model("user", mongoose.Schema({
    name : String,
    email : String,
    password : String,
    address : String,
    contact : String,
    city : String,
    gender : String,
    state : String,
    status : {type : Number, default : 1}
    
}))

app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(cors());


app.post("/api/user/auth", async(req, res)=>{
    let e = req.body.email;
    let p = req.body.password;
    let result = await UserModel.find({ email : e});
    if(result.length > 0)
    {
        if(result[0].password == sha1(p))
        {
            let obj = { id : result[0]._id };
            let token = jwt.sign(obj, "my secrect key");
            res.send({success : true, token : token, name : result[0].name });
        }
        else{
            res.send({ success : false, type : 2});
        }
    }
    else{
        res.send({ success : false, type : 1});
    }
})






app.listen(8080, ()=>{
    console.log("Server running");
})


// mongoexport --db dbname --collection collname --out filename

// mongoimport --db tss3_30 --collection users --file users.json --jsonArray