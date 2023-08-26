const fs = require("fs");
const datos = fs.readFileSync("src/data/products.json","utf-8");
const informacion = leerjson(datos);

function leerjson (data) {
    return JSON.parse(data);
} 

// console.log(`Datos entrantes : `, leerjson(datos));

const controller = {
    cart: (req, res) => {
        res.render("productCart", {informacion});
    },
    
    details: (req, res) => {
        res.render("productDetail");
    },

    detailsn: (req ,res) => {
        const id = req.params.id;
        let product = informacion.find(product => product.id == id);
        res.render("productDetail");
    },

    editarproducto:(req, res) => {
        res.render("editarproducto");
    },

    editarproductopost: (req, res) => {
        res.redirect("/");
    },

    crearproducto: (req, res) => {
        res.render("crearproducto");
    },

    crearproductopost:(req, res) => {
        res.redirect("/");
    }
}

module.exports = controller;