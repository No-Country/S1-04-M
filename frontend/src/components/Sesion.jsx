import React from "react";
import { Link } from "react-router-dom";

export const Sesion = () => {
  return (
    <div>
      <h1>
        La sesion ha terminado.
        <br />
        Ingresa nuevamente para continuar.
      </h1>

      <button>
        <Link to="/">Iniciar sesion</Link>
      </button>
    </div>
  );
};
