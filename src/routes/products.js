const express = require('express');
const router = express.Router();
const path = require("path")
const productosController = require('../controllers/products');


const multer=require('multer')

let storag=multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(__dirname, '../../public/img/products'))
    },
    filename: (req, file, cb)=>{
        console.log(file)
        let newFileName='product-' + Date.now()+path.extname(file.originalname)
        cb(null, newFileName)
}})

let upload=multer({storage:storag})


router.get('/products', productosController.productos);
router.get('/products/:id', productosController.detalleProducto);

router.get('/product/crear', productosController.crear);
router.post('/product/crear',upload.single('foto'), productosController.productoCreado);

router.get('/products/editar/:id', productosController.editar);
router.put('/products/editar/:id', productosController.productoEditado);
router.delete('/products/eliminar/:id', productosController.eliminarProducto);
router.get("/api/products", productosController.productApi);
router.get("/api/products/:id", productosController.productApiDetail)

/* -----------------> Carrito Routes <------------------- */
router.get('/carrito', productosController.carrito);
router.get("/carrito/agregar", productosController.sumar)
router.get("/carrito/restar", productosController.restar)
router.get("/carrito/agregar-2", productosController.sumar_2)
router.get("/carrito/restar-2", productosController.restar_2)
/* -----------------> Carrito products examples <------------------- */
router.get("/carrito/lampreado", productosController.lampreado)
router.get("/carrito/milanesa-con-papas", productosController.milanesa)
router.get("/carrito/pollo-con-papas")
router.get("/carrito/ensalada")
/* -----------------> Carrito Combos details <------------------- */
router.get("/carrito/hamburguesa-con-papas")
router.get("/carrito/pizza-con-cocacola")
router.get("/carrito/pechuga-de-pollo-con-ensalada-rusa")
router.get("/carrito/papas-con-cocacola")
/* -----------------> Confirmacion de compra <------------------- */
router.get("/confirmation",productosController.confirmation)

module.exports = router;