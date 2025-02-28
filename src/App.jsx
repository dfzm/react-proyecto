import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./componentes/Login";
import AdminDashboard from "./componentes/AdminDashboard";
import ClientDashboard from "./componentes/ClientDashboard";

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
    <Router>
      <Routes>
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route
          path="/admin"
          element={
            user && user.role === "admin" ? (
              <AdminDashboard user={user} setUser={setUser} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/client"
          element={
            user && user.role === "client" ? (
              <ClientDashboard user={user} setUser={setUser} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="*"
          element={
            user ? (
              <Navigate
                to={user.role === "admin" ? "/admin" : "/client"}
                replace
              />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
