import React from "react";
import ClientCard from "./ClientCard";

const clientes = [
  {
    id: 1,
    name: "Cliente A",
  },
  {
    id: 2,
    name: "Cliente B",
  },
  {
    id: 3,
    name: "Cliente C",
  },
];

const ClientGrid = () => {
  return (
    <div>
      <h2>CLIENTES:</h2>
      <div>
        {clientes.map((cliente) => (
          <ClientCard key={cliente.id} cliente={cliente} />
        ))}
      </div>
    </div>
  );
};

export default ClientGrid;
