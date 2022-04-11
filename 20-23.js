const express = require ("express")
const { appendfile } = require ("fs")
const materi20_23 = express()

materi20_23.listen (3000, function()){
    console.log("test test test")
})

materi20_23.get("/hapuspertemuan", function(req,res){
    res.send ("menghapus pertemuan mingguan RPS")
})

materi20_23.get("/pencarianmatkul", function(req,res){
    res.send("melakukan pencarian berdasarkan nama mata kuliah atau kode matakuliah terhadap RPS yang ada")
})

materi20_23.get("/detailrps", function(req,res){
    res.send("melihat detail RPS")
})

materi20_23.get("/exportsrps", function(req,res){
    res.send("mengeksport rps ke pdf")
})
