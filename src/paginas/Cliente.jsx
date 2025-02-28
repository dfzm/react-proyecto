import React from "react";
import { useParams, Link } from "react-router-dom";

const Cliente = () => {
  const { id } = useParams();
  return (
    <>
      <h1>Perfil del cliente: #{id}</h1>
      <Link to="/"> Volver al Dashboard</Link>
    </>
  );
};

export default Cliente;
