import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

const Cliente = () => {
  const { id } = useParams();
  const [tareas, setTareas] = useState([]);
  const [tarea, setTarea] = useState([]);

  //FUNCION PARA AGREGAR TAREA
  const agregarTarea = () => {
    if (tarea.trim()) {
      setTareas([...tareas, tarea]);
      setTarea(""); //Limpia campo de tarea
    }
  };

  //FUNCION PARA ELIMINAR TAREA
  const eliminarTarea = (index) => {
    const nuevasTareas = tareas.filter((_, i) => i !== index);
    setTareas(nuevasTareas);
  };

  //FUNCION PARA MARCAR TAREA COMPLETADA
  const marcarCompletado = (index) => {
    const nuevasTareas = tareas.map((t, i) =>
      i === index ? `${t} (COMPLETADA)` : t
    );
    setTareas(nuevasTareas);
  };
  return (
    <>
      <h1>Perfil del cliente: #{id}</h1>
      <div className="sec-agregar-tarea">
        <h2>Agregar tarea</h2>
        <input
          type="text"
          placeholder="Escribe una tarea..."
          value={tarea}
          onChange={(e) => setTarea(e.target.value)}
        />
        <button onClick={agregarTarea}>Agregar tarea</button>
      </div>

      <div className="sec-tareas">
        <h2>TAREAS</h2>
        <ul>
          {tareas.map((t, index) => (
            <li key={index}>
              <span className={t.includes("(COMPLETADA)") ? "clase1" : ""}>
                {t}
              </span>
              <button onClick={() => marcarCompletado(index)}>
                {" "}
                Marcar como COMPLETADO{" "}
              </button>
              <button onClick={() => eliminarTarea(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
      <Link to="/"> Volver al Dashboard</Link>
    </>
  );
};

export default Cliente;
