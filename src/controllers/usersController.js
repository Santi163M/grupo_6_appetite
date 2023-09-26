const fs = require("fs")
const path = require("path")
const readJson= JSON.parse(fs.readFileSync(path.join(__dirname + "../../data/MOCK_DATA.Usuarios.json")),"utf-8")
const controller = {
    jsonToArray :Object.values(readJson),
    findUsers: function (req, res) {
        const email = req.body.email
        const password = req.body.password
        const usuarioEncontrado = readJson.find(user => user.email)
        if (usuarioEncontrado && usuarioEncontrado.password === password) {
            res.render("user", { user: usuarioEncontrado })
        } else {
            res.redirect("/login")
        }
        
    }
}

module.exports = controller