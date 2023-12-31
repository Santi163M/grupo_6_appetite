const path = require('path');
const fs = require('fs');
const db = require("../../database/models")
let datosProductos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json'), 'utf-8'));

const controller = {
    productos: (req, res) => {
        db.Producto.findAll({ include: [{ association: "categoria" }] })
            .then((products) => { res.render('products', { products: products }) });
    },

    detalleProducto: (req, res) => {
        let id = req.params.id;
        db.Producto.findByPk(id, { include: [{ association: "categoria" }] })
            .then((producto => {
                res.render("productDetails", { producto })
            }))
    },

    crear: (req, res) => {
        db.Categoria.findAll()
            .then((categoria) => {
                res.render('crearproducto', { categoria: categoria })
            });
    },

    productoCreado: (req, res) => {
        const imageFilename = req.file.filename
        let nuevoproducto = {
            nombre: req.body.nombre,
            categoria_id: req.body.categoria,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            imagen: "/img/products/" + imageFilename
        }

        db.Producto.create(nuevoproducto, (err, productoCreado) => {
            if (err) {
                console.error('Error al crear el producto:', err);
            } else {
                console.log('Producto creado con éxito:', productoCreado);
            }
        });

        res.redirect("/products")
    },

    editar: (req, res) => {
        let id = req.params.id;
        let producto = db.Producto.findByPk(id, { include: [{ association: 'categoria' }] })
        let categoria = db.Categoria.findAll()
        Promise.all([producto, categoria])
            .then(([producto, categoria]) => { res.render("editarproducto", { producto: producto, categoria: categoria }) })

    },

    productoEditado: (req, res) => {
        let editproduct = {
            nombre: req.body.nombre,
            categoria_id: req.body.categoria,
            descripcion: req.body.descripcion,
            precio: req.body.precio

        }
        db.Producto.update({
            ...editproduct
        },
            {
                where: { id: req.params.id }
            })
        res.redirect('/products');
    },

    eliminarProducto: (req, res) => {
        let n = req.params.id
        db.Producto.destroy({
            where: { id: n }
        })
        res.redirect("/products")
    },
    productApi: (req, res) => {
        db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categoria',
                attributes: ["nombre"],
            }]
        })
            .then(products => {
                const countByCategory = {};

                products.map(product => {
                    const nombreCategoria = product.categoria ? product.categoria.nombre : 'Sin categoría';

                    if (countByCategory[nombreCategoria]) {
                        countByCategory[nombreCategoria]++;
                    } else {
                        countByCategory[nombreCategoria] = 1;
                    }
                });
                const product = products.map((product) => {
                    return {
                        id: product.id,
                        name: product.nombre,
                        description: product.descripcion,
                        categories: product.categoria ? product.categoria.nombre : "sin categoria",
                        detail: "/api/products/" + product.id
                    }
                })
                return res.json({
                    count: products.length,
                    countByCategory,
                    product
                })
            })
    },
    productApiDetail: (req, res) => {
        db.Producto.findByPk(req.params.id)
            .then((product) => {
                res.json(product)
            })
    },

    carrito: (req, res) => {
        let actualuser = req.session.usercertified
        console.log(actualuser.id)
        db.Usuario.findByPk(actualuser.id, {
            include: [
                {
                    model: db.Producto,
                    as: 'productos',
                    attributes: ['id','nombre','precio','descripcion','imagen']
                }
            ]
        })
            .then((usuario) => {
                if (usuario) {
                    usuario.productos.forEach(producto => {
                        console.log(`- Producto ID: ${producto.nombre}`);
                    });
                } else {
                    console.log("Usuario no encontrado")
                }
                res.render("carrito", { count: req.session.count || 0, usuario: usuario })
            })

    },
    carrito_add: (req, res) => {
        let userId = req.session.usercertified.id;
        let productId = req.body.producto_id;
        console.log(userId,productId)

        db.User_product.findOne({
            where: {
                usuario_id: userId,
                producto_id: productId
            }
        }).then((existingEntry) => {
            if (existingEntry) {
                res.redirect("/products/" +productId )
            } else {
                db.User_product.create({
                    usuario_id: userId,
                    producto_id: productId
                }).then(() => {
                    res.redirect("/carrito");
                })}}
            ) 
    },
    carrito_delete:(req,res)=>{
        const userId = req.session.usercertified.id;
        const productId = req.body.producto_id;
        db.User_product.destroy({
            where: {
                usuario_id: userId,
                producto_id: productId
            }
        }).then(() => {
            res.redirect('/carrito')})
    },
    confirmation: (req, res) => {
        res.render("confirmation")
    }/* ,
    sumar: (req, res) => {
        req.session.count = (req.session.count || 0) + 1;
        res.redirect("/carrito/#count")
    },
    restar: (req, res) => {
        req.session.count = Math.max((req.session.count || 0) - 1, 0)
        res.redirect("/carrito/#count")
    } */
}


module.exports = controller;
