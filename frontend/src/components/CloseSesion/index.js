import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { resetState } from "../../actions/Actions";
import "./styles.css";
export const CloseSesion = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    sessionStorage.clear();
    dispatch(resetState());
  }, []);

  return (
    <section className="section-close">
      <h2>La sesión ha terminado. Ingresa nuevamente para continuar.</h2>

      <div style={{ width: "200px" }}>
        <Link to="/" className="button button-orange">
          Iniciar sesion
        </Link>
      </div>
    </section>
  );
};
