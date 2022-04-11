const express = require ("express")
const apptest = express()

apptest.listen(3000, function(){
    console.log("server is okay on port 3000")
})

apptest.get("/tes2", function(req,res){
    res.send ("ini hanya untuk tes")
})