import React from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

const proyectsData = {
  1: [
    { id: "p1", name: "Proyecto A1" },
    { id: "p2", name: "Protecto A2" },
  ],
  2: [
    { id: "p3", name: "Proyecto B1" },
    { id: "p4", name: "Protecto B2" },
  ],
  3: [
    { id: "p5", name: "Proyecto C1" },
    { id: "p6", name: "Protecto C2" },
  ],
};
const ClientProyect = () => {
  const { id } = useParams();
  const proyects = proyectsData[id] || [];

  return (
    <div>
      <Header />
      <h2>Proyectos de {id}</h2>
      {proyects.length === 0 ? (
        <p>No hay proyectos asignados.</p>
      ) : (
        <ul>
          {proyects.map((proyect) => (
            <li key={proyect.id}> {proyect.name} </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ClientProyect;
