import React from 'react'
import { useState } from 'react'
import axios from "axios"
function FormularioPersonaje() {

    const [nombre, setNombre] = useState("");
    const [anioExperiencia, setAnioExperiencia] = useState(0);
    const [mostrarAlerta, setMostrarAlerta] = useState(false);
    const [mostrarAlertaSuccess, setMostrarAlertaSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault()
        // valida los inputs
        if (nombre === "" || anioExperiencia <= 0) {
            setMostrarAlerta(true)            
            setTimeout(() => {
                setMostrarAlerta(false)      

            }, 3000);
            return
        }

        try {
            const { data } = await axios.post("http://localhost:4000/api/v1/personajes-serie-tv/", {
                nombre,
                anio_expe: anioExperiencia
             })

             if (data) {
                setMostrarAlertaSuccess(true)
                setTimeout(() => {
                    setMostrarAlertaSuccess(false)      
    
                }, 3000);
             }
            
        } catch (error) {
            console.log(error);
            
        }

       
        
    } 

  return (
    <form className="formulario">
      <div className="form-nombre">
        <label htmlFor="">Nombre del personaje:</label>
        <input id="nombre" type="text" placeholder="Friends" onChange={(e) => setNombre(e.target.value)} />
      </div>
      <div className="form-clasificacion">
        <label htmlFor="">Año de experiencia:</label>
        <input id="clasificacion" type="number" placeholder="1" min={1} onChange={(e) => setAnioExperiencia(parseInt(e.target.value))}/>
      </div>

      <input id="btn-Enviar" type="submit" value={"Enviar"} onClick={handleSubmit} />
      {mostrarAlerta && <p style={{ color: "red", fontSize: 12}}>Debe llenar correctamente el formulario!</p>}
      {mostrarAlertaSuccess && <p style={{ color: "green", fontSize: 12}}>Formulario enviado!</p>}
    </form>
  )
}

export default FormularioPersonaje