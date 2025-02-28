import React from "react";
import { useNavigate } from "react-router-dom";

const ClientDashboard = ({ user, setUser }) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login", { replace: true });
  };
  return (
    <div>
      <h1>Bienvenido, {user.username}</h1>
      <button onClick={logout}>Cerrar sesión</button>
    </div>
  );
};

export default ClientDashboard;
