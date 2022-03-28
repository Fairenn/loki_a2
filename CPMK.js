const express = require ('express');
const router = express.Router();

router.put("/menambahcpmk", (req, res) => {
    console.log("====================Penambahan Data CPMK====================");
    let obj = {
        "Keterangan": "Menambah CPMK mata kuliah",
        "message": "Data ditambah oleh dosen",
        "Nip ": "198201182008121002",
        "Nama": "Husnil Kamil, MT",
        "Matkuliah yang diampu": "Pemograman Web",
        "Kode Matakuliah": "JSI62125",
        "CPMK": [   "1. Mahasiswa mampu menjelaskan konsep dasar dan komponen aplikasi berbasis web\n",
                    "2. Mahasiswa mampu menggunakan salah satu technology stack untuk membangun aplikasi berbasis web\n",
                    "3. Mahasiswa mampu menggunakan pemograman asynchronous\n"],
        "Cek": "PENAMBAHAN DATA CPMK BERHASIL",
        "code": ["OK",200]
    }
    res.json(obj);
    console.log("\n\nBerhasil Menambah Data CPMK\n");
  });


router.patch("/mengubahcpmk", (req, res) => {
    console.log("====================Update Data CPMK====================");
    let obj = {
        "Keterangan": "Mengubah CPMK mata kuliah",
        "message": "Data diupdate oleh dosen",
        "Nip ": "198201182008121002",
        "Nama": "Husnil Kamil, MT",
        "Matkuliah yang diampu": "Pemograman Web",
        "Kode Matakuliah": "JSI62125",
        "CPMK": [   "1. Mahasiswa mampu menjelaskan konsep dasar dan komponen aplikasi berbasis web\n",
                    "2. Mahasiswa mampu menggunakan salah satu technology stack untuk membangun aplikasi berbasis web\n",
                    "3. Mahasiswa mampu menggunakan pemograman asynchronous\n",
                    "4. Mahasiswa mampu menerapkan keamanan untuk situs web\n",
                    "5. Mahasiswa mampu menggunakan dan mendesain format data JSON\n",
                    "6. Mahasiswa mampu deploy aplikasi web ke internet\n",
                    "7. Mahasiswa mampu mendemonstrasikan keterampilan bekerja sama dengan tim\n"],
        "Cek": "Perubahan DATA CPMK BERHASIL",
        "code": ["OK",200]
    }
    res.json(obj)
    console.log("\n\nBerhasil Mengubah Data CPMK\n");
  });