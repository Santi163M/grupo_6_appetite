const { AsyncLocalStorage } = require('async_hooks');
const fs = require('fs');
const path = require('path');
const db = require('../../database/models')
const Op  = db.Sequelize.Op
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
    },
    search: (req,res)=>{

        const query = req.query['search-bar']
        db.Producto.findAll({
            where: {
                nombre: {[Op.like]: `${query}%`}
            }
        })
        .then((productos)=>{
            res.render("search",{productos:productos})
            console.log(query)
        })
    }
}
module.exports = controller;