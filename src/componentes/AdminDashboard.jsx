import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import ClientGrid from "./ClientGrid";

const AdminDashboard = ({ user, setUser }) => {
  const navigate = useNavigate();

  if (!user) {
    navigate("/login", { replace: true });
    return null;
  }
  const logout = () => {
    localStorage.removeItem("user");

    setUser(null);
    navigate("/login", { replace: true });
  };

  return (
    <div>
      <Header />
      <ClientGrid />
      <h1>Bienvenido, {user.username} (Administrador)</h1>
      <button onClick={logout}>Cerrar sesión</button>
    </div>
  );
};

export default AdminDashboard;
