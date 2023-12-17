const { AsyncLocalStorage } = require('async_hooks');
const fs = require('fs');
const path = require('path');
const db = require('../../database/models')

const controller = {
    home : (req,res)=>{
        Promise.all([
            db.Categoria.findAll(),
            db.Producto.findAll({ limit: 4 })
          ])
          .then(([categoria, producto]) => {
            res.render("home", { categoria:categoria, producto:producto })
          })
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