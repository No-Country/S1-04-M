import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "../../css/estilos.css";
import PassVisible from "../PassVisible/PassVisible";

export const Card = ({ card }) => {
  const { number, user_name, cvv, date } = card;

  let date1 = new Date(date ? date?.replace(/-+/g, "/") : "");
  let options = {
    year: "numeric",
    month: "numeric",
  };

  let date2 = date1.toLocaleDateString("es-ES", options);
  

  const [state, setState] = useState({
    number: number ? number : "",
    name: user_name ? user_name : "",
    expiry: date2 ? date2 : "",
    cvc: cvv ? cvv : "",
    focus: "",
  });

  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };


    

  return (
    <div className="container">
      <section className="tarjeta">
        <div className="card">
          <div className="card-body">
            <Cards
              number={state.number}
              name={state.name}
              expiry={state.expiry}
              cvc={state.cvv}
              focused={state.focus}
            />
            <form>
              <div className="form-group col-md-6">
                <label>Saldo</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Saldo"
                  value={card.balance}
                  disabled
                />

                <label>CVV</label>
               <PassVisible handleChange={handleInputChange} value={cvv} name="cvc" id="cvc"/>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
