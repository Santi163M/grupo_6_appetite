const fs = require("fs")
const path = require("path")
const bcrypt = require('bcrypt')

let Usuarios = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/MOCK_DATA.Usuarios.json'), 'utf-8'))
const db = require("../../database/models")
const op = db.Sequelize.Op
const Sequelize = require("sequelize")
const { count } = require("console")


let userControl = {
    create: (req, res) => {
        res.render("register")
    },
    createpost: (req, res) => {
        let newuser = {
            nombre: req.body.nombre,
            email: req.body.email,
            contraseña: bcrypt.hashSync(req.body.contrasena, 10),
            foto: req.body.foto
        }
        db.Usuario.create({
            ...newuser
        })
        console.log(newuser);
        res.redirect("/")
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
        db.Usuario.findOne({
            where: {
                [Sequelize.Op.or]: [
                    { nombre: recibido.emailorname },
                    { email: recibido.emailorname }
                ]
            },
            raw: true
        })
            //Leop12
            .then(Usuario => {
                console.log('Usuarios encontrados:', Usuario.email);
                let check = bcrypt.compareSync(recibido.password, Usuario.contraseña)
                if (check == true) {
                    req.session.usercertified = Usuario
                    res.redirect("/user")
                }
            })


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
    cantidadUsuarios: (req, res) => {
        const count = Usuarios.length
        res.send({ 
            count,
            Usuarios,
        })
    },
    usuarioInfo: (req, res) => {
        const Id = req.params.id;
        db.Usuario.findByPk(Id)
        .then((usuario)=>{
            res.send({usuario:usuario})
        })
    }
}
module.exports = userControl