import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/lib/styles.scss"
import "../css/estilos.css";

export const Card = () => {
  const [state, setState] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    focus: "",
  });

  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleFocusChange = (e) => {
    setState({
      ...state,
      focus: e.target.name,
    });
  };

  

  return (
    <div className="contenedor">
      <section className="tarjeta">
        <div className="card">
          <div className="card-body">
            <Cards
              number={state.number}
              name={state.name}
              expiry={state.expiry}
              cvc={state.cvc}
              focused={state.focus}
            />
            <form>
              <div className="form-group">
                <label htmlFor="number">Número de la tarjeta</label>
                <input
                  type="text"
                  name="number"
                  id="number"
                  maxLength="16"
                  className="form-control"
                  onChange={handleInputChange}
                  onFocus={handleFocusChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  maxLength="30"
                  className="form-control"
                  onChange={handleInputChange}
                  onFocus={handleFocusChange}
                />
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="expiry">Fecha de expiración</label>
                  <input
                    type="text"
                    name="expiry"
                    id="expiry"
                    maxLength="4"
                    className="form-control"
                    onChange={handleInputChange}
                    onFocus={handleFocusChange}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="cvc">CVC</label>
                  <input
                    type="text"
                    name="cvc"
                    id="cvc"
                    maxLength="4"
                    className="form-control"
                    onChange={handleInputChange}
                    onFocus={handleFocusChange}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
