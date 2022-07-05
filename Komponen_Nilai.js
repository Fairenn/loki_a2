const express = require ('express');
const router = express.Router();           

  

  //route Dosen dapat merubah komponen penilaian
  router.put("/ubah", (req, res) => {
    let upd={
      "message":"-----Ubah Komponen Nilai-----",
      "Course_id":"JSI62125",
      "Name_course":"Pemograman Web",
      "komponen_nilai":[
                    "1. Tugas   = 10%",
                    "2. Kuis    = 15%",
                    "3. UTS     = 35%",
                    "4. UAS     = 35%",
                    "5. Sikap   = 5%"
       ]
    }
    res.json(del);
    console.log("Komponen penilaian berhasil diubah");
  });

   //route Dosen dapat merubah komponen penilaian
   router.put("/ubah", (req, res) => {
    let upd={
      "message":"-----Hapus Komponen Nilai-----",
      "Course_id":"JSI62125",
      "Name_course":"Pemograman Web",
      "komponen_nilai":[
                    "1. Tugas   = 10%",
                    "2. Kuis    = 15%",
                    "3. UTS     = 35%",
                    "4. UAS     = 35%"
       ]
    }
    res.json(del);
    console.log("Komponen penilaian berhasil diubah");
  });

  module.exports = router;