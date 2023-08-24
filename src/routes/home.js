const express = require("express")
const homecontrol = require("../controll/home")
const homerouter = express.Router()

homerouter.get("/",homecontrol.home)
homerouter.get("/register",homecontrol.register)
homerouter.get("/login",homecontrol.login)
homerouter.get("/crearproducto", homecontrol.crearproducto)
homerouter.post("/crearproducto", (req, res)=>{
    res.redirect('./data/products.json')
})

module.exports = homerouter