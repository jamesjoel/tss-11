const routes = require("express").Router();
const Que = require("../models/Que");

routes.get("/getids", async(req, res)=>{
    let numarr = [];

    for(let i=1; i<=5; i++)
    {

        let randnum = Math.floor(Math.random()*25);
        numarr.push(randnum);
    }

    res.send({ ids : numarr });
})
routes.get("/quenum/:id", async(req, res)=>{
    
    let result = await Que.find({ id : req.params.id });

    res.send({ data : result[0] });
})


module.exports = routes;