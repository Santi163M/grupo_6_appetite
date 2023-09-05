const express = require('express');
const router = express.Router();

const productosController = require('../controllers/products');

router.get('/productos', productosController.productos);
router.get('/productos/crear', productosController.crear);

router.post ('/productos/crear', productosController.productoCreado);

module.exports = router;