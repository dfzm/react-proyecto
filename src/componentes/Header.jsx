import React from "react";

const Header = () => {
  return (
    <header>
      <h1>CRM</h1>
      <nav>
        <button>Llamar</button>
        <button>Consultar Manual</button>
        <button>Ver Perfil</button>
        <button>Cerrar Sesión</button>
        <span>🔔</span> {/* Icono de notificaciones */}
      </nav>
    </header>
  );
};

export default Header;
