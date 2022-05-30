const express = require('express');
const router = express()
const jwt = require('jsonwebtoken')
require('dotenv').config()

router.set('view engine', 'ejs');
router.use( express.static( "views" ) );

router.post("/login", (req, res) => 
{
    res.send("Ini adalah Halaman Login");
});

router.get("/logout", (req, res) => 
{
    res.send("Ini adalah Halaman logout");
});

router.get("/login", (req, res) => 
{
    res.render('login');
});

module.exports = router;

