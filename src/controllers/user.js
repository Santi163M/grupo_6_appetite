const fs = require("fs")
const path = require("path")
const bcrypt = require('bcrypt')

let usersjson = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/MOCK_DATA.Usuarios.json'), 'utf-8'))

let userControl = {
    create: (req, res) => {
        res.render("register")
    },
    createpost: (req, res) => {
        let newuser = {
            id: usersjson.length + 1,
            nombre: req.body.nombre,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            foto: req.body.foto
        }
        usersjson.push(newuser)
        fs.writeFileSync(path.resolve(__dirname, '../data/MOCK_DATA.Usuarios.json'), JSON.stringify(usersjson))
        res.redirect("/home")
    },
    login: (req, res) => {
        res.render("login")
    },
    loginpost: (req, res) => {
        let recibido = {
            emailorname: req.body.email,
            password: req.body.password,
            remember: req.body.remember
        }




    },
    user: (req, res) => {
        let actualuser = req.session.usercertified
        res.render("user", { actualuser })
    },
    /* jsonToArray :Object.values(readJson),
     findUsers: function (req, res) {
         const email = req.body.email
         const password = req.body.password
         const usuarioEncontrado = readJson.find(user => user.email)
         if (usuarioEncontrado && usuarioEncontrado.password === password) {
             res.render("user", { user: usuarioEncontrado })
         } else {
             res.redirect("/login")
         }
         
     }*/
}
module.exports = userControl