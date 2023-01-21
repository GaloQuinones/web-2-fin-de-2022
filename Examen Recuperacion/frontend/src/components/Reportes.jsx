import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Reportes() {
  const [asignaciones, setAsignaciones] = useState([]);
  const [series, setSeries] = useState([]);
  const [personajes, setPersonajes] = useState([]);

  const [asignacionFiltroIdSitio, setAsignacionFiltroIdSitio] = useState([]);
  const [asignacionFiltroPapel, setAsignacionFiltroPapel] = useState([]);

  useEffect(() => {
    const consultarAsignaciones = async () => {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/asignacion-serie-tv/"
      );

      if (data) {
        setAsignaciones(data);
      }
    };
    const consultarSerie = async () => {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/serie-tv/"
      );

      if (data) {
        setSeries(data);
      }
    };
    const consultarPersonaje = async () => {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/personajes-serie-tv/"
      );

      if (data) {
        setPersonajes(data);
      }
    };

    consultarAsignaciones();
    consultarSerie();
    consultarPersonaje();
  }, []);

  const newAsignacionPapel = [];
  const filtrarPapel = (e) => {
    const texto = e.target.value.toLowerCase();

    if (texto.length > 1) {
      for (let asignacion of asignaciones) {
        let papel = asignacion.papel.toLowerCase();
        if (papel.indexOf(texto) !== -1) {
          //     console.log(texto);
          // console.log(sitio);
          newAsignacionPapel.push(asignacion);
          //  setSitiosFiltrado(sitio)
          //   }
        }
      }
      setAsignacionFiltroPapel(newAsignacionPapel);
    } else {
      setAsignacionFiltroPapel([]);
    }
  };

  const newAsignacionSitio = [];
  const filtrarIdSerie = (e) => {
    const texto = e.target.value.toLowerCase();
    if (texto.length > 1) {
      for (let asignacion of asignaciones) {
        let idSerie = asignacion.id_serie.toLowerCase();
        if (idSerie.indexOf(texto) !== -1) {
          //     console.log(texto);
          // console.log(sitio);
          newAsignacionSitio.push(asignacion);
          //  setSitiosFiltrado(sitio)
          //   }
        }
      }
      setAsignacionFiltroIdSitio(newAsignacionSitio);
    } else {
      setAsignacionFiltroIdSitio([]);
    }
  };

  return (
    <>
      <div className="filtros">
        <div className="filtro-papel">
          <label htmlFor="">FILTRAR POR PAPEL:</label>
          <input
            type="text"
            placeholder="Hermano de Monica"
            onChange={filtrarPapel}
          />
        </div>

        <div className="filtro-id-serie">
          <label htmlFor="">FILTRAR POR ID SERIE:</label>
          <input
            type="text"
            placeholder="63cb3c822730f6b672ee19f3"
            onChange={filtrarIdSerie}
          />
        </div>
      </div>
      <div className="contenedor-reportes">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ID ASIGNACIÓN</th>
              <th scope="col">ID SERIE</th>
              <th scope="col">ID PERSONAJE</th>
              <th scope="col">PAPEL</th>
              <th scope="col">TIPO PAPEL</th>
              <th scope="col">FECHA INICIO</th>
              <th scope="col">FECHA FIN</th>
              <th scope="col">TEMPORADAS</th>
              <th scope="col">NOMBRE SERIE</th>
              <th scope="col">CLASIFICACIÓN SERIE</th>
              <th scope="col">NOMBRE PERSONAJE</th>
              <th scope="col">AÑOS DE EXPERIENCIA</th>
            </tr>
          </thead>
          <tbody>
            {asignacionFiltroIdSitio.length <= 0 &&
            asignacionFiltroPapel.length <= 0 ? (
              <>
                {asignaciones.length > 0 ? (
                  <>
                    {asignaciones.map((asignacion, index) => (
                      <>
                        <tr key={index}>
                          <th scope="row">{asignacion._id}</th>
                          <td>{asignacion.id_serie}</td>
                          <td>{asignacion.id_personaje}</td>
                          <td>{asignacion.papel}</td>
                          <td>{asignacion.papel_tipo}</td>
                          <td>
                            {new Date(
                              asignacion.fecha_inicio
                            ).toLocaleDateString()}
                          </td>
                          <td>
                            {new Date(
                              asignacion.fecha_fin
                            ).toLocaleDateString()}
                          </td>
                          <td>{asignacion.temporadas}</td>
                          {series.map((serie) => (
                            <>
                              {serie._id === asignacion.id_serie && (
                                <>
                                  <td>{serie.nombre}</td>
                                  <td>{serie.clasificacion}</td>
                                </>
                              )}
                            </>
                          ))}

                          {personajes.map((personaje) => (
                            <>
                              {personaje._id === asignacion.id_personaje && (
                                <>
                                  <td>{personaje.nombre}</td>
                                  <td>{personaje.anio_expe}</td>
                                </>
                              )}
                            </>
                          ))}
                        </tr>
                      </>
                    ))}
                  </>
                ) : (
                  <p>No hay asignaciones</p>
                )}
              </>
            ) : (
              <>
                {asignacionFiltroIdSitio.length > 0 && (
                  <>
                    {asignacionFiltroIdSitio.map((asignacion, index) => (
                      <>
                        <tr key={index}>
                          <th scope="row">{asignacion._id}</th>
                          <td>{asignacion.id_serie}</td>
                          <td>{asignacion.id_personaje}</td>
                          <td>{asignacion.papel}</td>
                          <td>{asignacion.papel_tipo}</td>
                          <td>
                            {new Date(
                              asignacion.fecha_inicio
                            ).toLocaleDateString()}
                          </td>
                          <td>
                            {new Date(
                              asignacion.fecha_fin
                            ).toLocaleDateString()}
                          </td>
                          <td>{asignacion.temporadas}</td>
                          {series.map((serie) => (
                            <>
                              {serie._id === asignacion.id_serie && (
                                <>
                                  <td>{serie.nombre}</td>
                                  <td>{serie.clasificacion}</td>
                                </>
                              )}
                            </>
                          ))}

                          {personajes.map((personaje) => (
                            <>
                              {personaje._id === asignacion.id_personaje && (
                                <>
                                  <td>{personaje.nombre}</td>
                                  <td>{personaje.anio_expe}</td>
                                </>
                              )}
                            </>
                          ))}
                        </tr>
                      </>
                    ))}
                  </>
                )}
                <>
                  {asignacionFiltroPapel.length > 0 && (
                    <>
                      {asignacionFiltroPapel.map((asignacion, index) => (
                        <>
                          <tr key={index}>
                            <th scope="row">{asignacion._id}</th>
                            <td>{asignacion.id_serie}</td>
                            <td>{asignacion.id_personaje}</td>
                            <td>{asignacion.papel}</td>
                            <td>{asignacion.papel_tipo}</td>
                            <td>
                              {new Date(
                                asignacion.fecha_inicio
                              ).toLocaleDateString()}
                            </td>
                            <td>
                              {new Date(
                                asignacion.fecha_fin
                              ).toLocaleDateString()}
                            </td>
                            <td>{asignacion.temporadas}</td>
                            {series.map((serie) => (
                              <>
                                {serie._id === asignacion.id_serie && (
                                  <>
                                    <td>{serie.nombre}</td>
                                    <td>{serie.clasificacion}</td>
                                  </>
                                )}
                              </>
                            ))}

                            {personajes.map((personaje) => (
                              <>
                                {personaje._id === asignacion.id_personaje && (
                                  <>
                                    <td>{personaje.nombre}</td>
                                    <td>{personaje.anio_expe}</td>
                                  </>
                                )}
                              </>
                            ))}
                          </tr>
                        </>
                      ))}
                    </>
                  )}
                </>
              </>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Reportes;
