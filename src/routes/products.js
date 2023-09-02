const express = require("express")
const productcontrol = require("../controllers/productsControllers.js")
const productrouter = express.Router()




productrouter.get("/products",productcontrol.cart)

productrouter.get("/products/:id/details",productcontrol.detailsn)

productrouter.get("/products/:id/edit",productcontrol.editarproducto)

productrouter.post("/products/:id/edit",productcontrol.editarproductopost)

productrouter.get("/products/create",productcontrol.crearproducto)

productrouter.post("/products/create",productcontrol.crearproductopost)

module.exports = productrouter