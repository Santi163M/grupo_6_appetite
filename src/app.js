const express = require('express');
const home = require("./routes/home");
const products = require("./routes/products");
const users = require("./routes/users")
const app = express();
const PORT = 3030;

const methodOverride = require('method-override');

app.use(methodOverride('_method'));

app.use(express.static('public'));

app.set("view engine", "ejs")
app.set("views", "src/views");

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(home);
app.use(users)
app.use('/products', products);

app.listen(PORT, console.log(`Servidor iniciado en el puerto ${PORT}.`));