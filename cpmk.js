const express = require ('express');
const router = express.Router();

//Menghapus CPMK Mata Kuliah
router.delete("/hapuscpmk", (req, res) => {
    console.log("====================MENGHAPUS DATA CPMK MATA KULIAH====================");
    let obj = {
        "Keterangan": "Hapus CPMK Mata Kuliah",
        "Pesan": "Data telah diupdate oleh dosen",
        "NIP": "198201182008121002",
        "Nama": "Husnil Kamil, M.T.",
        "Mata Kuliah yang Diampu": "Pemrograman Web",
        "Kode Mata kuliah": "JSI62125",
        "CPMK": [   "1. Mahasiswa mampu menjelaskan konsep dasar dan komponen aplikasi berbasis web\n",
                    "2. Mahasiswa mampu menggunakan salah satu technology stack untuk membangun aplikasi berbasis web\n",
                    "3. Mahasiswa mampu menggunakan pemrograman asynchronous\n",
                    "4. Mahasiswa mampu menggunakan dan mendesain format data JSON\n",
                    "5. Mahasiswa mampu deploy aplikasi web ke internet\n",
                ],
        "Cek": "HAPUS DATA CPMK BERHASIL",
        "Code": ["SIP",200]
    }
    res.json(obj);
    console.log("\n\nBerhasil Menghapus Data CPMK!\n");
  });

module.exports = router;