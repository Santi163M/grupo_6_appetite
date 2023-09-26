const express = require("express")
const router = express.Router()
const controller = require("../controllers/usersController")


router.post("/user", controller.findUsers)

module.exports = router