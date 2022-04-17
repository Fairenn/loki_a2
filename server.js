const express = require('express');
const app = express()
const port = 3000


const komponenNilai = require('./komponenNilai');
app.use('/komponenNilai',komponenNilai)

const databaseLoki = require('./databaseLoki');
app.use('/databaseLoki',databaseLoki)


app.get("/cetak", (req, res) =>       
{
    res.send("Cetak RPS");
});

app.listen(port, () =>{
 console.log(`Server Sedang Berjalan`)
});
