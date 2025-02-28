import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <h1>Dashboard: ¡Bienvenido al CRM! </h1>
      <p>Selecciona un cliente para ver su perfil:</p>

      <ul>
        <li>
          <Link to="/cliente/1">Cliente 1</Link>
        </li>
        <li>
          <Link to="/cliente/2">Cliente 2</Link>
        </li>
        <li>
          <Link to="/cliente/3">Cliente 3</Link>
        </li>
      </ul>
    </>
  );
};

export default Dashboard;
