
const express=require("express")

const servidor=express()

const path=require("path")

servidor.use(express.json())

const urlSerie=path.join(__dirname, "./paginas/Serie.html")
const urlAsignacion=path.join(__dirname, "./paginas/Asignacion.html")
const urlPersonaje=path.join(__dirname, "./paginas/Personaje.html")




servidor.get("/serie", (req, res)=>{

    res.status(200).sendFile(urlSerie)

})

servidor.get("/asignacion", (req, res)=>{
    res.status(200).sendFile(urlAsignacion)
})


servidor.get("/personaje", (req, res)=>{
    res.status(200).sendFile(urlPersonaje)
})

servidor.listen(3000, ()=>{
    console.log("Escuchando...")
})