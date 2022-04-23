const express = require ('express');
const router = express.Router();
  
  //route mengubah referensi
  router.put("/updateref", (req, res) => {
    let upd={
        "message":"Masukkan id referensi yang akan diUpdate/ dimodifikasi",
        "id":101,
        "nama":[
            "Bovee & Thill (2009:61)",
            "Renn (2003:95 )"
        ]
    }
    res.json(upd);
    console.log("Referensi berhasil diupdate/dimodifikasi");
  });
  
  module.exports = router;
