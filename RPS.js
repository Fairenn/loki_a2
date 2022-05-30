const express = require("express");
const router = express();

router.set('view engine', 'ejs');
router.use( express.static( "views" ) );

router.get("/", (req, res) =>       
{
    res.render('rps');
});

//6. route menambah RPS baru
router.post("/tambahrps", (req, res) => {
  let add = {
    message: "Silahkan tambahkan RPS disini",
    "mata kuliah": {
      "kode matkul": "JSI62125",
      "nama matkul": "Pemrograman Web",
      "jumlah sks": "3",
      semester: "4",
    },
  };
  res.json(add);
  console.log("RPS berhasil ditambahkan");
});

//7. route mengubah RPS yang sudah ada
router.post("/ubahrps", (req, res) => {
  let add = {
    message: "Silahkan tambahkan RPS disini",
    "mata kuliah": {
      "kode matkul": "JSI62126",
      "nama matkul": "Pemrograman Web",
      "jumlah sks": "2",
      semester: "4",
    },
  };
  res.json(add);
  console.log("RPS berhasil diubah");
});


module.exports = router;
//6. route menambah RPS baru
router.post("/addrps", (req, res) => {
  let add = {
    message: "Silahkan tambahkan RPS disini",
    "mata kuliah": {
      "kode matkul": "JSI62125",
      "nama matkul": "Pemrograman Web",
      "jumlah sks": "3",
      semester: "4",
    },
  };
  res.json(add);
  console.log("RPS berhasil ditambahkan");
});

//7. route mengubah RPS yang sudah ada
router.post("/changerps", (req, res) => {
  let add = {
    message: "Silahkan tambahkan RPS disini",
    "mata kuliah": {
      "kode matkul": "JSI62126",
      "nama matkul": "Pemrograman Web",
      "jumlah sks": "2",
      semester: "4",
    },
  };
  res.json(add);
  console.log("RPS berhasil diubah");
});

//8. route merevisi RPS lama menjadi RPS baru
router.post("/revisirps", (req, res) => {
    let add = {
        message : ""
    }
})

module.exports = router;
