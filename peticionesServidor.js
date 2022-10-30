
const express=require("express")

const servidor=express()

const path=require("path")

servidor.use(express.json())

const urlIdioma=path.join(__dirname, "./paginas/Idioma.html")
const urlInstructor=path.join(__dirname, "./paginas/Instructor.html")
const urlAprendizaje=path.join(__dirname, "./paginas/Aprendizaje.html")




servidor.get("/idioma", (req, res)=>{

    res.status(200).sendFile(urlIdioma)

})

servidor.get("/instructor", (req, res)=>{
    res.status(200).sendFile(urlInstructor)
})


servidor.get("/aprendizaje", (req, res)=>{
    res.status(200).sendFile(urlAprendizaje)
})

servidor.listen(3000, ()=>{
    console.log("Escuchando...")
})