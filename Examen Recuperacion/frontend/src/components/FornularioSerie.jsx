import React, { useState } from "react";
import axios from "axios";

function FornularioSerie() {

    const [nombre, setNombre] = useState("");
    const [clasificacion, setclasificacion] = useState("0");
    const [mostrarAlerta, setMostrarAlerta] = useState(false);
    const [mostrarAlertaSuccess, setMostrarAlertaSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault()
        // valida los inputs
        if (nombre === "" || clasificacion === "") {
            setMostrarAlerta(true)            
            setTimeout(() => {
                setMostrarAlerta(false)      

            }, 3000);
            return
        }

        try {
            const { data } = await axios.post("http://localhost:4000/api/v1/serie-tv/", {
                nombre,
                clasificacion: clasificacion
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
        <label htmlFor="">Nombre de la serie:</label>
        <input id="nombre" type="text" placeholder="Friends" onChange={(e) => setNombre(e.target.value)}/>
      </div>
      <div className="form-clasificacion">
        <label htmlFor="">Clasificación de la serie:</label>
        <input id="clasificacion" type="text" placeholder="Ej: 13+" onChange={(e) => setclasificacion(e.target.value)}/>
      </div>

      <input id="btn-Enviar" type="submit" value={"Enviar"} onClick={handleSubmit} />
      {mostrarAlerta && <p style={{ color: "red", fontSize: 12}}>Debe llenar correctamente el formulario!</p>}
      {mostrarAlertaSuccess && <p style={{ color: "green", fontSize: 12}}>Formulario enviado!</p>}
    </form>
  );
}

export default FornularioSerie;
