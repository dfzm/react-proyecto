import React from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const logout = () => {
    localStorage.removeItem("user"); // Elimina la información del usuario
    setUser(null); // Actualiza el estado para que el usuario esté deslogueado
    navigate("/login");
  };

  return (
    <div>
      <h1>ADMINISTRADOR</h1>
      <button onClick={logout}>Cerrar sesión</button>
    </div>
  );
};

export default AdminDashboard;
