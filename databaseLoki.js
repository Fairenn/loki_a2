// const express = require("express");
// const router = express.Router();
// const mysql = require('mysql2');

// router.get('/Loki', function(req, res, next){

//     const connection = mysql.createConnection({
//         host: "localhost",
//         user: "root",
//         password:"",
//         database:"loki" });
//     connection.connect();
// });

// console.log("Berhasil Connect ke Database")
// module.exports = router;

const { Sequelize } = require('sequelize');

const databaseLoki = new Sequelize('loki', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

  try {
    databaseLoki.authenticate();
    console.log('Connection has been established successfully.');   //tes koneksi
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
module.exports = databaseLoki;

