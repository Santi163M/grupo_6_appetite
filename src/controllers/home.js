const { AsyncLocalStorage } = require('async_hooks');
const fs = require('fs');
const path = require('path');
const db = require('../../database/models')

const controller = {
    home : (req,res)=>{
        db.Categoria.findAll()
        .then((categoria)=>{ res.render("home", {categoria:categoria})})
        
       /* if (req.session.usercertified) {
            let actualuser = req.session.usercertified
            res.render("home",{actualuser})
            console.log("si hay usuario");
        }
        else {
            res.render("home")
        }*/
    }
}
module.exports = controller;