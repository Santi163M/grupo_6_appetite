const fs = require("fs")

//leer json

const datos = fs.readFileSync("src/data/products.json","utf-8")

function leerjson (data) {
    let convertir;
    convertir = JSON.parse(data)
    return convertir
} 

console.log(`Datos entrantes : `, leerjson(datos))
let informacion = leerjson(datos)

const productcontrol = {
    cart:(req,res)=>{
        res.render("productCart",{informacion})
    },
    details:(req,res)=>{
        res.render("productDetail")
    },
    detailsn: (req,res)=>{
        const n = req.params.id
        let product = informacion.find(p => p.id == n)
        res.render("productDetail")
    }
}

module.exports = productcontrol