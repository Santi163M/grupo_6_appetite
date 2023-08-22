const express = require('express');
const path = require('path');

const app = express();
const port = 3030

app.use(express.static('public'));

app.set("view engine","ejs")
app.set("views","./src/views")

const home = require("./src/routes/home")
const product = require("./src/routes/products")

app.use(home)
app.use(product)





/*
app.get('/carrito', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/productCart.html'))
});
app.get("/register",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./src/views/register.html"))
})
*/

app.listen(port, console.log(`servidor Coriendo en el puerto ${port}`))