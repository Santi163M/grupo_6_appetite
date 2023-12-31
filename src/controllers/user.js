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
            apellido: req.body.apellido,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            foto: req.body.foto
        }
        console.log(newuser);
        db.Usuario.create({
            ...newuser
        })
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
                if (req.body.remember === 'on') {
                    res.cookie('remember', 'true', { maxAge: 7 * 24 * 60 * 60 * 1000 }); 
                  }

                let check = bcrypt.compareSync(recibido.password, Usuario.password)
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

        db.Usuario.findAll()
            .then((usuarios) => {
                const users = usuarios.map((usuario) => {
                    return {
                        id: usuario.id,
                        name: usuario.nombre,
                        email: usuario.email,
                       detail: "/api/users/" + usuario.id
                    }
                })
                res.json({
                    count: usuarios.length,
                    users,
                })
            })

    },

    usuarioInfo: (req, res) => {
        const Id = req.params.id;
        db.Usuario.findByPk(Id)
            .then((usuario) => {
                const User={
                    id: usuario.id,
                    name: usuario.nombre,
                    email: usuario.email,
                    foto: '/api/users/' + usuario.id + '/' + usuario.foto
                }

                res.json({ User })
            })
    }
}
module.exports = userControl