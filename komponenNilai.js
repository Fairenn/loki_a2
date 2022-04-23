const express = require ('express');
const router = express.Router();           

//route Dosen dapat menambah komponen penilaian
  router.post("/tambah", (req, res) => {
    let add={
        "message":"-----Tambah Komponen Nilai-----",
        "Course_id":"JSI62125",
        "Name":"pemrograman Web",
        "komponen_nilai":[
                      "1. Tugas =  15%",
                      "2. Kehadiran = 10%",
                      "3. UTS = 30%",
                      "4. UAS = 45%",
         ]

    }
    res.json(add);
    console.log("Komponen penilaian berhasil ditambahkan");
  });

//route Dosen dapat mengubah komponen penilaian
  router.put("/Ubah", (req, res) => {
    let upd={
      "message":"-----Ubah Komponen Nilai-----",
      "Course_id":"JSI62125",
      "Name":"Pemograman Web",
      "komponen_nilai":[ "1. Tugas   = 10%",
                         "2. Kuis    = 15%",
                         "3. UTS     = 35%",
                         "4. UAS     = 35%",
                         "5. Sikap    = 5%"
       ]
    }
    res.json(del);
    console.log("Komponen penilaian berhasil diubah");
  });
  
  //route Dosen dapat menghapus komponen penilaian
  router.delete("/hapus", (req, res) => {
    let del={
      "message":"-----Hapus Komponen Nilai-----",
      "Course_id":"JSI62125",
      "Name":"Pemograman Web",
      "komponen_nilai":[
        "1. Tugas   = 10%",
        "2. Kuis    = 15%",
        "3. UTS     = 35%",
        "4. UAS     = 35%",
       ]
    }
    res.json(del);
    console.log("Komponen penilaian berhasil dihapus");
  });
  
  
  module.exports = router;
