import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./componentes/Login";
import AdminDashboard from "./componentes/AdminDashboard";
import ClientProyect from "./componentes/ClientProyect";
import ClientDashboard from "./componentes/ClientDashboard";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Login setUser={setUser} />} />

          <Route
            path="/admin"
            element={
              user ? (
                <AdminDashboard user={user} setUser={setUser} />
              ) : (
                <Navigate setUser={setUser} />
              )
            }
          />
          <Route
            path="/admin/cliente/:id"
            element={user ? <ClientProyect user={user} /> : <Navigate to="/" />}
          />
          <Route
            path="/cliente"
            element={
              user ? (
                <ClientDashboard user={user} setUser={setUser} />
              ) : (
                <Navigate setUser={setUser} />
              )
            }
          />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
