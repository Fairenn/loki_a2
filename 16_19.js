const express = require("express")
const app = express()

app.get("/loki_b2", function(req,res){ 
res.send("berhasil di tampilkan");

});
app.get("/16", function(req,res){ 
    res.send("berhasil diubah");
    
});

app.get("/17", function(req,res){ 
    res.send("berhasil dihapus");
    
});

app.get("/18", function(req,res){ 
    res.send("berhasil ditambah");
    
});

app.get("/19", function(req,res){ 
    res.send("berhasil diubah");
    
});

app.listen(3000, function(){
    console.log("Server aktif di port 3000")
});