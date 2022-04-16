import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "../../css/estilos.css";

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

  const handleFocusChange = (e) => {
    const checked = document.getElementById("checkbox").checked;
    if(checked === "true"){
     setState({ ...state, focus: "cvc"})
    }
    else{
      setState({ ...state, focus: "name" });
    }
    /* setState({
      ...state,
      focus: e.target.name ?  "name" : e.target.name,
    }); */
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
                <label htmlFor="cvc">CVV</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
              onFocus={handleFocusChange}
              />

              <input
                  type="checkbox"
                  name="cvc"
                  id="cvc"
                  value={cvv}
                  checked={false}
                  onChange={handleInputChange}
                  onFocus={handleFocusChange}
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
