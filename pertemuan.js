const express = require ('express');
const router = express.Router();           





//Menambah pertemuan mingguan dalam RPS
router.post("/add", (req, res) => {
    let obj={
        "message":"-----Silahkan tambah Pertemuan Mingguan RPS-----",
        "course_id":"JSI62125",
        "nama":[
            "1. Pertemuan 1 = Pengenalan Web",
            "2. Pertemuan 2 = Pemograman Javascript Dasar",
            "3. Pertemuan 3 = Pemograman Javascript Lanjut",
            "4. Pertemuan 4 = Pemograman Javascript Web",
            "5. Pertemuan 5 = Restful API dan Format data JSON"
        ]
    }
    res.json(obj);
    console.log("Menambah pertemuan Mingguan berhasil ditambahkan");
  });

  ]
    }
    res.json(del);
    console.log("Komponen penilaian berhasil diubah");
  });
  module.exports = router;