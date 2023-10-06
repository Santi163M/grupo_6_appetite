const { AsyncLocalStorage } = require('async_hooks');
const fs = require('fs');
const path = require('path');

const controller = {
    home : (req,res)=>{
        if (req.session.usercertified) {
            let actualuser = req.session.usercertified
            res.render("home",{actualuser})
            console.log("si hay usuario");
        }
        else{
            res.render("home")
        }
    }
}
module.exports = controller;