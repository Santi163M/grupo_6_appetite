const path = require('path');
const fs = require('fs');

const datosProductos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json'), 'utf-8'));

const controller = {
    productos: (req, res) => {
        res.render('products', { datosProductos });
    },

    crear: (req, res) => {
        res.render('crearProducto');
    },

    productoCreado : (req, res) => {
        res.redirect('/productos');
    }
};

module.exports = controller;