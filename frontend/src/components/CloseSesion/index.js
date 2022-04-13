import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
export const CloseSesion = () => {
  return (
    <section className="section-close">
      <h2>La sesion ha terminado. Ingresa nuevamente para continuar.</h2>

      <div style={{ width: "200px" }}>
        <Link to="/" className="button button-orange">
          Iniciar sesion
        </Link>
      </div>
    </section>
  );
};
