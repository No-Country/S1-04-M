import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home/styles.css";

export const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/balans");
  };

  return (
    <section className="login-container">
      <form onSubmit={handleSubmit}>
        <img
          src="https://images.vexels.com/media/users/3/129286/isolated/preview/f71f09d3aa7db678ee884a2cdea1a435-simbolo-del-edificio-del-banco.png"
          alt="logo-banco"
        />
        <h1>Registra tu usuario</h1>
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Apellido" />
        <input type="text" placeholder="Cedula" />
        <input type="text" placeholder="Correo" />
        <input type="tel" placeholder="Telefono" />
        <input type="text" placeholder="Direccion" />
        <input type="text" placeholder="Ciudad" />
        <input type="text" placeholder="Pais" />
        <input type="text" placeholder="Codigo Postal" />
        <input type="text" placeholder="Contraseña" />
        <input type="text" placeholder="Confirmar Contraseña" />
<button type="submit">Registrar</button>
        </form>
    </section>
    );
};
