const fs = require('fs');
const path = require('path');

const controller = {
    home: (req, res) => {
        res.render("index");
    },

    register: (req, res) => {
        res.render("register");
    },

    login: (req, res) => {
        res.render("login");
    }
}
module.exports = controller;