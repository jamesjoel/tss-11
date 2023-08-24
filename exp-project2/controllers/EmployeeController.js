const app = require("express").Router();
const Emp = require("../models/Employee")

app.get("/", async(req, res)=>{
    let result = await Emp.find();
    let obj = { employee : result };
    res.render("pages/employee/list", obj);
})
app.get("/add", (req, res)=>{
    res.render("pages/employee/add");
})
app.post("/save", async(req, res)=>{
    await Emp.create(req.body);
    res.redirect("/employee");
})

app.get("/delete/:x", async(req, res)=>{
    let a = req.params.x;
    await Emp.deleteMany({_id : a});
    res.redirect("/employee");

})


app.get("/edit/:y", async (req, res)=>{
    let m = req.params.y;
    let result = await Emp.find({ _id : m });
    let obj = { updateemployee : result[0] };
    // let result = Emp.find({ city : "indore"});
    res.render("pages/employee/edit", obj);
})

app.post("/update/:z", async(req, res)=>{
    let id = req.params.z;
    await Emp.updateMany({ _id : id}, req.body);
    res.redirect("/employee");  
})

module.exports = app;