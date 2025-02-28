import React, { useState } from "react";

const Login = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username && password) {
      let role = "client";

      if (username === "admin" && password === "admin") {
        role = "admin";
      }

      const userData = { username, password, role };

      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);
    } else {
      setError("Por favor, ingrese su nombre de usuario y su contraseña.");
    }
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
