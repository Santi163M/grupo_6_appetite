const express = require("express")
const productcontrol = require("../controll/products")
const productrouter = express.Router()




productrouter.get("/products",productcontrol.cart)

productrouter.get("/products/:id/details",productcontrol.detailsn)

productrouter.get("/products/:id/edit",productcontrol.editarproducto)

productrouter.get("/products/create",productcontrol.crearproducto)


module.exports = productrouter
