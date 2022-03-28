const express = require ("express")
const { appendfile } = require ("fs")
const materi6_10 = express()

materi6_10.listen (3000, function()){
    console.log("test test test")
})

materi6_10.get("/menambah rps", function(req,res){
    res.send ("menambah rps ya gais ya")
})

materi6_10.get("/mengubah rps", function(req,res){
    res.send("mengubah rps yang udah ada")
})

materi6_10.get("/merevisi rps", function(req,res){
    res.send("revisi rps gaiss")
})

materi6_10.get("/menambah cpmk", function(req,res){
    res.send("menambah cpmk ya gais")
})

materi6_10.get("/mengubah cpmk", function(req,res){
    res.send("mengubah cpmk gais")
})