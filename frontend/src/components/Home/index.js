import React from "react";
import "./styles.css";
export const Home = () => {
  return (
    <section className="login-container">
      <form>
        <img
          src="https://images.vexels.com/media/users/3/129286/isolated/preview/f71f09d3aa7db678ee884a2cdea1a435-simbolo-del-edificio-del-banco.png"
          alt="logo-banco"
        />

        <input
          type="card-number"
          name="tarjet"
          placeholder="Número de tarjeta"
        />
        <input type="password" name="password" placeholder="Contraseña" />
        <button className="button">Iniciar Sesión</button>
      </form>
    </section>
  );
};
