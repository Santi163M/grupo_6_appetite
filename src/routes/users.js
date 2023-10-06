const express = require("express")
const usercontroller = require("../controllers/user")
let userrouter = express.Router()

userrouter.get("/register",usercontroller.create)
userrouter.post("/registerpost",usercontroller.createpost)
userrouter.get("/login",usercontroller.login)
userrouter.post("/loginpost",usercontroller.loginpost)
userrouter.get("/user",usercontroller.user)

module.exports = userrouter