import React from "react";
import { useNavigate } from "react-router-dom";
export const ConfirmTransaction = () => {
  const navigate = useNavigate();

  const transaction = JSON.parse(sessionStorage.getItem("transaction")) || "";
  const Count = transaction.count || "";
  const amount = transaction.amount || "";
  const description = transaction.description || "";
  const date = transaction.date || "";
  const type = transaction.type || "";

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
          <input
            className="input-text"
            type="tel"
            inputMode="numeric"
            pattern="[0-9\s]{13,16}"
            maxLength="16"
            name="count"
            value={Count}
            placeholder="Número de tarjeta"
          />
        </label>

        <label>
          <input
            type="text"
            className="input-text"
            value={amount}
            placeholder="Cantidad"
          />
        </label>
        <label>
          <input
            type="text"
            className="input-text"
            value={description}
            placeholder="Descripción"
          />
        </label>
        <label>
          <span className="label-special">Date</span>
          <input type="date" value={date} className="input-special" />
        </label>
        <label>
          <span className="label-special">Type</span>
          <select
            className="input-special"
            value={type === "income" ? "income" : "outcome"}
          >
            <option value="income">Income</option>
            <option value="outcome">Outcome</option>
          </select>
        </label>

        <button
          onSubmit={handleSubmit}
          type="submit"
          className=" button button-blue"
        >
          Confirm
        </button>
      </form>
    </div>
  );
};
