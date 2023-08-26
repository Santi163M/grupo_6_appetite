const express = require("express");
const productController = require("../controllers/products");
const router = express.Router();

router.get("/product", productController.cart)
router.get("/product/details/:id", productController.detailsn)

module.exports = router;