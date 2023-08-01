const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
});

app.get('/login', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/login.html'))
})

app.use(express.static('public'));

app.listen('8000', console.log('Servidor iniciado en el puerto 8000.'))