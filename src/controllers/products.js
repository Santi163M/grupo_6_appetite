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
    },

    editar: (req, res) => {
        let id = req.params.id;
        producto = datosProductos.find(producto => producto.id == id);
        
        res.render('editarProducto', { producto });
    },

    productoEditado: (req, res) => {
        let id = req.params.id;
        producto = datosProductos.find(producto => producto.id == id);

        datosProductos[id - 1].nombre = req.body.nombre;
        datosProductos[id - 1].categoria = req.body.categoria;
        datosProductos[id - 1].descripcion = req.body.descripcion;
        datosProductos[id - 1].precio = req.body.precio;
        datosProductos[id - 1].img = req.body.imagen;

        datosProductos = JSON.stringify(datosProductos);
    
        fs.writeFileSync(path.resolve(__dirname, '../data/products.json'), datosProductos);
    
        res.redirect('/productos');
    }
};

module.exports = controller;