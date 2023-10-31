const db = require("../../database/models")
const { AsyncLocalStorage } = require('async_hooks')
const fs = require('fs');
const path = require('path');

const controller = {
    home : (req,res)=>{
        db.Producto.findAll({
            include:[{association : "categorias"}],
            raw : true
        })
        .then(productos=>{
            if (req.session.usercertified) {
                let actualuser = req.session.usercertified
                res.render("home",{actualuser,productos})
                console.log("si hay usuario");
            }
            else{
                res.render("home",{productos})
            }
        })
    }
}
module.exports = controller;