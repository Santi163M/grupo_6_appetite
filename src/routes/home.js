const express = require("express")
const homecontrol = require("../controll/home")
const homerouter = express.Router()

homerouter.get("/",homecontrol.home)
homerouter.get("/register",homecontrol.register)
homerouter.get("/login",homecontrol.login)
homerouter.get("/crearproducto", homecontrol.crearproducto)
homerouter.post("/crearproducto", (req, res)=>{
    console.log(req.body)
    res.redirect("/listadeproductos")
})
homerouter.get('/listadeproductos', homecontrol.listadeproductos)

module.exports = homerouter