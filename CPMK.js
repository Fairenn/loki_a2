const express = require ('express');
const router = express.Router();

//Menghapus CPMK
router.delete("/deletecpmk", (req, res) => {
    console.log("====================Delete Data CPMK====================");
    let obj = {
        "Keterangan": "Delete CPMK mata kuliah",
        "message": "Data dihapus oleh dosen",
        "NIP ": "198201182008121002",
        "Nama": "Husnil Kamil, M.T.",
        "Mata kuliah yang diampu": "Pemrograman Web",
        "Kode mata kuliah": "JSI62125",
        "CPMK": [   "1. Mahasiswa mampu menjelaskan konsep dasar dan komponen aplikasi berbasis web\n",
                    "2. Mahasiswa mampu menggunakan salah satu technology stack untuk membangun aplikasi berbasis web\n",
                    "3. Mahasiswa mampu menggunakan pemograman asynchronous\n",
                    "4. Mahasiswa mampu menerapkan keamanan untuk situs web\n",
                    "5. Mahasiswa mampu menggunakan dan mendesain format data JSON & deploy aplikasi web ke internet\n"
                ],
        "Cek": "DELETE DATA CPMK BERHASIL",
    }
    res.json(obj);
    console.log("\n\nHapus Data CPMK Berhasil\n");
  });

module.exports = router;