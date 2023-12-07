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


router.get('/', productosController.productos);
router.get('/:id', productosController.detalleProducto);
router.get('/crear/:id', productosController.crear);
router.post('/crear',upload.single('foto'), productosController.productoCreado);
router.get('/editar/:id', productosController.editar);
router.put('/editar/:id', productosController.productoEditado);
router.delete('/eliminar/:id', productosController.eliminarProducto);
router.get("/api/products")
router.get("/api/products")

module.exports = router;