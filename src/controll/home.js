const fs = require('fs');
const path = require('path');



const homecontrol = {
    home:(req,res)=>{
        res.render("index")
    },
    register:(req,res)=>{
        res.render("register")
    },
    login:(req,res)=>{
        res.render("login")
    },
    crearproducto:(req, res)=>{
        res.render("crearproducto")
    }
}
module.exports = homecontrol