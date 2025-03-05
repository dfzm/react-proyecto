import React from "react";
import { useNavigate } from "react-router-dom";

const ClientCard = ({ cliente }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/admin/cliente/${cliente.id}`);
  };
  return (
    <div onClick={handleClick}>
      <h3>{cliente.name}</h3>
    </div>
  );
};

export default ClientCard;
