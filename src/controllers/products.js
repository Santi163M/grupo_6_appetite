const path = require('path');
const fs = require('fs');
// const { CategoryChannelChildManager } = require('discord.js');
const db = require("../../database/models")
let datosProductos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json'), 'utf-8'));

const controller = {
    productos: (req, res) => {
        res.render('products', { datosProductos, id: datosProductos.length + 1 });
    },

    detalleProducto: (req, res) => {
        let id = req.params.id;
        db.Producto.findByPk(id)
        .then((producto =>{
            res.render("productDetails",{producto})
        }))
    },

    crear: (req, res) => {
        res.render('crearProducto', { id: datosProductos.length + 1 });
    },

    productoCreado: (req, res) => {
        let nuevoproducto = {
            nombre: req.body.nombre,
            categoria_id: req.body.categoria,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            foto: req.body.foto
        };
        db.Producto.create({
            ...nuevoproducto
        })
        res.redirect("/")
    },

    editar: (req, res) => {
        let id = req.params.id;
        db.Producto.findByPk(id)
        .then((producto)=>{
            res.render("editarproducto",{producto})  
        })
    },

    productoEditado: (req, res) => {
        let n = req.params.id;
        let editproduct = {
            nombre : req.body.nombre,
            categoria_id : req.body.categoria_id,
            descripcion : req.body.descripcion,
            precio : req.body.precio
        }
        db.Producto.update({
            ...editproduct
        },
        {
            where: {id:n}
        })
        res.redirect('/');
    },

    eliminarProducto: (req, res) => {
        let n = req.params.id
        db.Producto.destroy({
            where:{id:n}
        })
        res.redirect("/")
    }
};
module.exports = controller;