const express = require("express")
const router = new express.Router()
const controllers = require("../Controller/Admincontroller" )
const userControllers= require("../Controller/UserController")
router.post("/createAdmin", controllers.createAdmin);
router.post("/login", controllers.Login);

// user
router.post("/createUser", userControllers.UserData);

module.exports = router 