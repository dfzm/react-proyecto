import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [setUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let role = "";

    if (username === "admin" && password === "admin") {
      role = "admin";
    } else if (username === "cliente" && password === "cliente") {
      role = "cliente";
    } else {
      setError("Usuario o contraseña incorrectos.");
      return;
    }

    const userData = { username, role };
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));

    // Redirigir al dashboard correspondiente
    navigate(role === "admin" ? "/admin" : "/cliente");
  };
  return (
    <div className="login-container">
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre de Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Escribe tu contraseña"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Iniciar Sesión</button>
      </form>
      {error && <p>{error} </p>}
    </div>
  );
};

export default Login;
