const express = require("express")
const homecontrol = require("../controll/home")
const homerouter = express.Router()

homerouter.get("/",homecontrol.home)
homerouter.get("/register",homecontrol.register)
homerouter.get("/login",homecontrol.login)

module.exports = homerouter