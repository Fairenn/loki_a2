const express = require('express');
const router = express()
const jwt = require('jsonwebtoken')
require('dotenv').config()
const controllerUsers = require("./controller/controllerUsers");

router.set('view engine', 'ejs');
router.use( express.static( "views" ) );

router.post("/login", controllerUsers.login)
router.post("/register", controllerUsers.register)

router.get("/register", (req, res) => 
{
    res.render("register");
});

router.get("/login", (req, res) => 
{
    res.render('login');
});

module.exports = router;

