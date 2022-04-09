const express = require('express');
const app = express()
const port = 3000


const komponenNilai = require('./komponenNilai');
app.use('/komponenNilai',komponenNilai)





app.get("/print", (req, res) =>       
{
    res.send("Cetak RPS");
});

app.listen(port, () =>{
 console.log(`Server Sedang Berjalan`)
});