const express = require("express")
const productcontrol = require("../controll/products")
const productrouter = express.Router()




productrouter.get("/product",productcontrol.cart)
/*
productrouter.get("/productdetail",productcontrol.details)
*/
productrouter.get("/product/details/:id",productcontrol.detailsn)

module.exports = productrouter