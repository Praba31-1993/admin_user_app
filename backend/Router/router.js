const express = require("express")
const router = new express.Router()
const controllers = require("../Controller/Admincontroller" )

router.post("/createAdmin", controllers.createAdmin);

module.exports = router 