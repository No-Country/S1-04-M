import React from "react";
import { useNavigate } from "react-router-dom";

export const ConfirmTransaction = () => {

const navigate = useNavigate()

 /*  const transaction = JSON.parse(sessionStorage.getItem("transaction"));
  const Count = transaction.count;
  const amount = transaction.amount;
  const description = transaction.description;
  const date = transaction.date;
  const type = transaction.type;
 */
const handleSubmit = (e) => {
  e.preventDefault();
  sessionStorage.removeItem("transaction");
  navigate("/balans");
};


  return (
    <div>
      <h1>ConfirmTransaction</h1>

      <form onSubmit={handleSubmit}>
        <h5>ORIGEN</h5>
        <h6>CUENTA</h6>
        <select>
          <option>Cuenta 1</option>
          <option>Cuenta 2</option>
          <option>Cuenta 3</option>
        </select>
        <h6>DESTINARIO</h6>
        <button>Agregar</button>
        <select>
          <option>Cuenta 1</option>
          <option>Cuenta 2</option>
          <option>Cuenta 3</option>
        </select>
        <h6>MONTO</h6>
        <input type="text" />
        <h6>CONCEPTO</h6>
        <input type="text" />
        <button onSubmit={handleSubmit} type="submit">
          Confirmar transferencia
        </button>
      </form>
    </div>
  );
};
