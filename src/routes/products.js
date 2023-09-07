const express = require('express');
const router = express.Router();

const productosController = require('../controllers/products');

router.get('/', productosController.productos);
router.get('/crear/:id', productosController.crear);
router.get('/editar', productosController.editar);

router.post('/crear/:id', productosController.productoCreado);


module.exports = router;