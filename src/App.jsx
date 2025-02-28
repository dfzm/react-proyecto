import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./componentes/AdminDashboard";
import ClientDashboard from "./componentes/ClientDashboard";
import Login from "./componentes/Login";
import { useEffect, useState } from "react";

const App = () => {
  const [user, setUser] = useState(null);
  // Verificamos si el usuario ya está logueado al cargar la aplicación
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="app">
      {!user ? (
        <Login setUser={setUser} />
      ) : user.role === "admin" ? (
        <AdminDashboard user={user} />
      ) : (
        <ClienteDashboard user={user} />
      )}
      ;
    </div>
  );
};

export default App;
