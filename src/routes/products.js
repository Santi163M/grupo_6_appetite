const express = require("express")
const productcontrol = require("../controllers/productsControllers")
const productrouter = express.Router()

productrouter.get("/product",productcontrol.cart)
productrouter.get("/productdetail",productcontrol.details)
productrouter.get("/productdetail/:id",productcontrol.detailsn)
productrouter.get("/editarproducto", productcontrol.editarproducto)
productrouter.post("/editarproducto", productcontrol.editarproductopost)
productrouter.get("/crearproducto", productcontrol.crearproducto)
productrouter.post("/crearproducto", productcontrol.crearproductopost)
productrouter.get("/listadeproductos", productcontrol.listadeproductos)

productrouter.get("/products",productcontrol.cart)

productrouter.get("/products/:id/details",productcontrol.detailsn)

productrouter.get("/products/:id/edit",productcontrol.editarproducto)

productrouter.get("/products/create",productcontrol.crearproducto)


module.exports = productrouter
