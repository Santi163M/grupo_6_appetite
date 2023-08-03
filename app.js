const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'))
});

app.get('/login', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/login.html'))
})

app.get('/productDetail', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/productDetail.html'))
})
app.use(express.static('public'));

app.get('/productDetail', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/carrito.html'))
});

app.listen('8000', console.log('Servidor iniciado en el puerto 8000.'))