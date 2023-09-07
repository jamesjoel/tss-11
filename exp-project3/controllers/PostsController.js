const app = require("express").Router();
const Posts = require("../models/Posts")

// localhost:3000/posts

app.get("/", async (req, res)=>{
    let result = await Posts.find();
    let obj = { data : result }
    res.render("pages/posts", obj)
})


module.exports = app;