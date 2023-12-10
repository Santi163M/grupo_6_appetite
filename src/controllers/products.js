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
        db.Producto.create(nuevoproducto, (err, productoCreado) => {
            if (err) {
                console.error('Error al crear el producto:', err);
            } else {
                console.log('Producto creado con éxito:', productoCreado);
            }
        });
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
    },
    productApi: (req,res)=>{
        db.Producto.findAll({include: [{
            model: db.Categoria,
            as: 'categoria', 
            attributes: ["nombre"], 
          }]})
        .then( products => {
            const countByCategory = {};

            products.map(product => {
              const nombreCategoria = product.categoria ? product.categoria.nombre : 'Sin categoría';
        
              if (countByCategory[nombreCategoria]) {
                countByCategory[nombreCategoria]++;
              } else {
                countByCategory[nombreCategoria] = 1;
              }
            });
                const product = products.map( (product) => {
                    return {
                        id: product.id,
                        name: product.nombre,
                        description: product.descripcion,
                        categories: product.categoria ? product.categoria.nombre : "sin categoria",
                        detail: "/api/products/" + product.id
                    }})            
                return res.json({
                    count: products.length,
                    countByCategory,
                    product
            })
        })
    },
    productApiDetail: (req,res)=>{
        
    }
}
module.exports = controller;
