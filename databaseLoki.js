const express = require("express");
const router = express.Router();
const mysql = require('mysql');

router.get('/Loki', function(req, res, next){

    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password:"",
        database:"loki" });
    connection.connect();
});

console.log("Berhasil Connect ke Database")
module.exports = router;