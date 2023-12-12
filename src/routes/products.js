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
router.get('/carrito', productosController.carrito);
module.exports = router;