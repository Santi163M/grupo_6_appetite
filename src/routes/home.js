const express = require("express");
const homeController = require("../controllers/home");
const router = express.Router();

router.get("/", homeController.home)
router.get("/login", homeController.login)
router.get("/register", homeController.register)

module.exports = router;