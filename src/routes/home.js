const express = require("express");
const homeController = require("../controllers/homeController");
const router = express.Router();

router.get("/", homeController.home)
router.get("/register", homeController.register)
router.get("/login", homeController.login)

module.exports = router;