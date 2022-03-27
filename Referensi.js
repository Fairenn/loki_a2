const express = require ('express');
const router = express.Router();

//Menambah referensi
router.post("/addref", (req, res) => {
    let add={
        "message":"Tambah referensi di sini",
        "id":112,
        "pengarang":[
            "Matt Doyle (2011)"
        ],
        "judul":[
            "Beginning PHP 5.3"
        ], 
    }
    res.json(add);
    console.log("Referensi berhasil ditambahkan");
});
  
  //Menghapus referensi
  router.delete("/deleteref/:id", (req, res) => {
    let obj={
        "message":"Masukkan id referensi yang akan dihapus",
        "id":111,
    }
    res.json(obj);
    console.log("Referensi dengan Id"+req.params.id+" telah berhasil dihapus");
  });
  
  //Mengubah referensi
  router.put("/updateref", (req, res) => {
    let upd={
        "message":"Masukkan id referensi yang akan diubah",
        "id":112,
        "nama":[
            "Matt Doyle (2009)"
        ],
        "judul": [
            "Beginning PHP 5.3"
        ],
    }
    res.json(upd);
    console.log("Referensi dengan Id"+req.params.id+" telah berhasil diubah");
  });
  
  module.exports = router;