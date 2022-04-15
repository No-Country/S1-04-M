import React from "react";
import { useNavigate } from "react-router-dom";
export const ConfirmTransaction = () => {
  const navigate = useNavigate();

  const transaction = JSON.parse(sessionStorage.getItem("transaction")) || "";
  const count_user = transaction.count_user;
  const count_destiny = transaction.count_destiny;
  const amount = transaction.amount;
  const description = transaction.description;

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.removeItem("transaction");
    navigate("/balans");
  };

  return (
    <div>
      <h1>ConfirmTransaction</h1>

      <form onSubmit={handleSubmit} className="form-transactions">
        <label>
          <span className="label-special">CUENTA ORIGEN</span>
          <select
            className="input-special"
            value={count_user}
            name="count_user"
          >
            <option value="1">Card 1</option>
            <option value="2">Card 2</option>
            <option value="3">Card 3</option>
          </select>
        </label>
        <button className="button button-blue">Elegir</button>
        <label>
          <span className="label-special">DESTINARIO</span>
          <select
            className="input-special"
            value={count_destiny}
            name="count_destiny"
          >
            <option value="1">Card 1</option>
            <option value="2">Card 2</option>
            <option value="3">Card 3</option>
          </select>
        </label>
        <label>
          <button className="button button-blue">Agregar</button>
        </label>
        <label>
          <input
            type="number"
            name="amount"
            min={0}
            className="input-text"
            placeholder="Cantidad"
            value={amount}
          />
        </label>
        <label>
          <input
            type="text"
            name="description"
            placeholder="CONCEPTO"
            className="input-text"
            value={description}
          />
        </label>
        <button className="button button-blue" type="onSubmit">
          Confirmar
        </button>
      </form>
    </div>
  );
};
