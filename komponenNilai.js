const express = require ('express');
const router = express.Router();           

  //route Dosen dapat mengubah komponen penilaian
  router.put("/Ubah", (req, res) => {

    res.json(del);
    console.log("Komponen penilaian berhasil ditambahkan");
  });
  
  //route Dosen dapat menghapus komponen penilaian
  router.delete("/hapus", (req, res) => {
   
    res.json(del);
    console.log("Komponen penilaian berhasil dihapus");
  });
  
  
  module.exports = router;