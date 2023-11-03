const express = require("express")
const usercontroller = require("../controllers/user")
let userrouter = express.Router()

const path=require('path')

const multer=require('multer')
const { check } = require("express-validator")

//multer
let storage=multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(__dirname, '../../public/img/users'))
    },
    filename: (req, file, cb)=>{
        console.log(file)
        let newFileName='user-'+Date.now()+path.extname(file.originalname)
        cb(null, newFileName)
}})

let upload=multer({storage:storage})



userrouter.get("/register",usercontroller.create)

userrouter.post("/register", upload.single('foto'), usercontroller.createpost)

userrouter.get("/login",usercontroller.login)
userrouter.post("/loginpost",[
    check('email').isEmail().withMessage('Email inválido'),
    check('password').isLength({min:8}).withMessage('La contraseña debe tener al menos 8 caracteres')
], usercontroller.loginpost)

userrouter.get("/user",usercontroller.user)

module.exports = userrouter
