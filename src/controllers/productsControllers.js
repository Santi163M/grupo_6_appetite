const { isUtf8 } = require("buffer");
const { log } = require("console");
const fs = require("fs")

//leer json

const datos = fs.readFileSync("src/data/products.json","utf-8")
const algo = "src/data/products.json"
const datosactualizables = fs.readFileSync("src/data/products.json","utf-8")

function leerjson (data) {
    let convertir;
    convertir = JSON.parse(data)
    return convertir
} 
function escribirenjson(path,newdata) {

     let datos = JSON.parse(fs.readFileSync(path))
     
     datos.push(newdata)
     
     let datosJSON = JSON.stringify(datos)

     fs.writeFileSync(path,datosJSON)

}
function sobrescribirjson(id,path,newdata){
    let datos = JSON.parse(fs.readFileSync(path))
    let savedata = []
    datos.forEach(element => {
        if(element.id == id){
            element.producto = newdata.producto
            element.precio = newdata.precio
            element.img = newdata.img
            element.descripcion = newdata.descripcion
            savedata.push(element)
        }
        else{
            savedata.push(element)
        }
    });
    let datosJSON = JSON.stringify(savedata)
    fs.writeFileSync(path,datosJSON)
}
/*
console.log(`Datos entrantes : `, leerjson(datos))
*/
const informacion = leerjson(datos)

const productcontrol = {
    cart:(req,res)=>{
        res.render("productCart",{informacion})
    },
    details:(req,res)=>{
        res.render("productDetail")
    },
    detailsn: (req,res)=>{
        const n = req.params.id
        let productoelegido = informacion.find(p => p.id == n)
        res.render("productDetail",{productoelegido})
    },
    editarproducto:(req, res)=>{
        const n = req.params.id
        let productoelegido = informacion.find(p => p.id == n)
        res.render("editarproducto",{productoelegido})
    },
    editarproductopost:(req, res)=>{
        let newnombre = req.body.nombre
        let newdescripcion = req.body.Descripcion
        let newimagen = req.body.Imagen
        let newprecio = parseFloat(req.body.Precio)
        let newcategoria = req.body.Categoria
  
       let recibido = {
        producto:newnombre,
        precio:newprecio,
        img:newimagen,
        descripcion:newdescripcion,
       }
       console.log("informacion recibida;");
       console.log(recibido);

        const n = req.params.id
        let productoelegido = informacion.find(p => p.id == n)

        console.log("saved");
        sobrescribirjson(n,"src/data/products.json",recibido);
        
        res.render("editarproducto",{productoelegido})

        res.redirect("/products/:id/edit")
    },
    crearproducto:(req, res)=>{
        res.render("crearproducto")
    },
    crearproductopost:(req, res)=>{
        let recibido = req.body
        escribirenjson("src/data/products.json",recibido)
        res.redirect("/products/create")
    }
}

module.exports = productcontrol
