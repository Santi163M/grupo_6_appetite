const fs = require("fs")
const path = require("path")

let usersjson = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/MOCK_DATA.Usuarios.json'), 'utf-8'))

let userControl = {
    create : (req,res)=>{
        res.render("register")
    },
    createpost : (req,res)=>{
        let newuser = {
            id : usersjson.length + 1,
            nombre : req.body.nombre,
            email : req.body.email,
            password : req.body.password,
            foto : req.body.foto
        }
        usersjson.push(newuser)
        fs.writeFileSync(path.resolve(__dirname, '../data/MOCK_DATA.Usuarios.json'),JSON.stringify(usersjson))
        res.redirect("/login")
    },
    login : (req,res)=>{
        res.render("login")
    },
    loginpost : (req,res)=>{
        let recibido = {
            emailorname : req.body.email,
            password : req.body.password,
            remember : req.body.remember
        }
        
        for (let i = 0; i < usersjson.length; i++) {
            if (usersjson[i].nombre == recibido.emailorname || usersjson[i].email == recibido.emailorname) {
                if (usersjson[i].password == recibido.password) {
                    //console.log(`nombre : ${usersjson[i].nombre} email : ${usersjson[i].email} contraseña aceptada`);
                    if (recibido.remember == "true") {
                        let user = usersjson[i]
                        req.session.usercertified = user
                    }
                }
            }
        }
        res.redirect("/user")
    },
    user : (req,res)=>{
        let actualuser = req.session.usercertified
        res.render("user",{actualuser})
    }
}
module.exports = userControl