const express = require('express');
const app = express()
const port = 3000

const controller = require(`./controller/controllerUsers`);


const komponenNilai = require('./komponenNilai');
app.use('/komponenNilai',komponenNilai)

// const databaseLoki = require('./databaseLoki');
// app.use('/databaseLoki',databaseLoki)

const RPS = require('./RPS');
app.use('/RPS',RPS)

const CPMK = require('./CPMK');
app.use('/CPMK',CPMK)

const referensi = require('./referensi');
app.use('/referensi',referensi)

app.get("/users", controller.retrieveAll);

app.get("/cetak", (req, res) =>       
{
    res.send("Cetak RPS");
});

app.listen(port, () =>{
 console.log(`Server Sedang Berjalan`)
});
