import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import FornularioSerie from "./components/FornularioSerie";
import FormularioPersonaje from "./components/FormularioPersonaje";
import Reportes from "./components/Reportes";

function App() {
  const [opcionSelecionada, setOpcionSelecionada] = useState("Serie");
  const [mostarFormSerie, setMostarFormSerie] = useState(true);
  const [mostarFormPersonaje, setMostarFormPersonaje] = useState(false);
  const [mostarReportes, setMostarReportes] = useState(false);

  const selecionarOpcion = (e) => {
    setOpcionSelecionada(e.target.value);
    // console.log();

    if (e.target.value === "Serie") {
      setMostarFormSerie(true);
      setMostarReportes(false)
      setMostarFormPersonaje(false)

    } else if(e.target.value === "Personaje") {
      setMostarFormSerie(false);
      setMostarFormPersonaje(true)
      setMostarReportes(false)

    }else{
      setMostarReportes(true)
      setMostarFormSerie(false);
      setMostarFormPersonaje(false)

    }
  };
  return (
    <div className="App">
      <div className="header">
        <h1>Formulario de Registro para serie de televisión</h1>
      </div>
      <div className="contenido">
        <div className="opciones">
          <div className="radio">
            <input
              id="serie"
              type="radio"
              value="Serie"
              checked={opcionSelecionada === "Serie"}
              onChange={selecionarOpcion}
            />
            <label htmlFor="serie">Serie</label>
          </div>

          <div className="radio">
            <input
              id="personaje"
              type="radio"
              value="Personaje"
              checked={opcionSelecionada === "Personaje"}
              onChange={selecionarOpcion}
            />
            <label htmlFor="personaje">Personaje</label>
          </div>

          <div className="radio">
            <input
              id="reportes"
              type="radio"
              value="Reportes"
              checked={opcionSelecionada === "Reportes"}
              onChange={selecionarOpcion}
            />
            <label htmlFor="reportes">Reportes</label>
          </div>
        </div>

        <div className="formularios-contenedor">
          {mostarFormSerie && <FornularioSerie /> }
          { mostarFormPersonaje && <FormularioPersonaje />}
          {mostarReportes && <Reportes/>}
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
