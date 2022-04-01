import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export const Home = () => {

const navigate = useNavigate()

const handleSubmit = (e)=>{
e.preventDefault();
navigate('/balans')
}

  return (
    <section className="login-container">
      <form onSubmit={handleSubmit}>
        <img
          src="https://images.vexels.com/media/users/3/129286/isolated/preview/f71f09d3aa7db678ee884a2cdea1a435-simbolo-del-edificio-del-banco.png"
          alt="logo-banco"
        />

        <input
          type="tel"
          inputMode="numeric"
          pattern="[0-9\s]{13,16}"
          maxLength="16"
          name="tarjet"
          placeholder="Número de tarjeta"
        />
        <input type="password" name="password" placeholder="Contraseña" />
        <button className="button" type="submit">Iniciar Sesión</button>
      </form>
    </section>
  );
};
