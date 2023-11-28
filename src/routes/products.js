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
router.get('/crear', productosController.crear);

router.post('/crear',upload.single('foto'), productosController.productoCreado);
router.get('/editar/:id', productosController.editar);
router.put('/editar/:id', productosController.productoEditado);
router.delete('/eliminar/:id', productosController.eliminarProducto);

module.exports = router;