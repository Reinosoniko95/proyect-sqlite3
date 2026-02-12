const express = require("express");
const db = require("./db.js");
const app = express();

app.use(express.json());

// Peticiones: GET, POST, PUT, DELETE
app.get("/",(req,res)=>{
    const usuarios = db.prepare("SELECT * FROM usuarios;").all();
    res.json({usuarios});
})

app.post("/",(req,res)=>{
    const {nombre} = req.body;
    const usuarios = db.prepare("INSERT INTO usuarios (nombre) VALUES (?);").run(nombre);
    res.json({ok:true});
})

app.listen(3000,()=>{
    console.log("Servidor en el puerto 3000")
})