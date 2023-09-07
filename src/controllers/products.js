const path = require('path');
const fs = require('fs');
const { CategoryChannelChildManager } = require('discord.js');

let datosProductos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json'), 'utf-8'));

const controller = {
    productos: (req, res) => {
        res.render('products', { datosProductos, id: datosProductos.length + 1 });
    },

    crear: (req, res) => {
        res.render('crearProducto', { id: datosProductos.length + 1 });
    },

    editar: (req, res) => {
        res.render('editarProducto');
    },

    productoCreado: (req, res) => {
        let producto = {
            id: req.params.id,
            nombre: req.body.nombre,
            categoria: req.body.categoria,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            img: req.body.imagen
        };

        datosProductos.push(producto);
        datosProductos = JSON.stringify(datosProductos);
    
        fs.writeFileSync(path.resolve(__dirname, '../data/products.json'), datosProductos);

        res.redirect('/productos');
    }
};

console.log(__dirname);

module.exports = controller;