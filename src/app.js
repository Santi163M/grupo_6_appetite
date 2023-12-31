// ---- REQUIRES ---- //
const express = require('express');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const home = require("./routes/home");
const products = require("./routes/products");
const users = require("./routes/users")
const session = require('express-session')
// ---- Server settings ---- //
const app = express();
const PORT = 3030;
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(session({
    secret: 'Secreto!!!',
    resave: true,
    saveUninitialized: true
}))
app.use(cookieParser());
app.set("view engine", "ejs")
app.set("views", "src/views");
app.listen(PORT, console.log(`Servidor iniciado en el puerto ${PORT}. http://localhost:${PORT}.`));

// ---- ROUTES MIDDLEWARES ---- //
app.use(home);
app.use(users)
app.use(products);
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('error',{err:err.stack});
  });

