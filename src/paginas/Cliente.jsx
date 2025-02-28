import React from "react";
import { useParams } from "react-router-dom";

const Cliente = () => {
  const { id } = useParams();
  return (
    <>
      <h1>Perfil del cliente: #{id}</h1>
    </>
  );
};

export default Cliente;
