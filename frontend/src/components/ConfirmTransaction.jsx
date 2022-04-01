import React from "react";
import { useNavigate } from "react-router-dom";

export const ConfirmTransaction = () => {

const navigate = useNavigate()

  const transaction = JSON.parse(sessionStorage.getItem("transaction"));
  const Count = transaction.count;
  const amount = transaction.amount;
  const description = transaction.description;
  const date = transaction.date;
  const type = transaction.type;

const handleSubmit = (e) => {
  e.preventDefault();
  sessionStorage.removeItem("transaction");
  navigate("/balans");
};


  return (
    <div>
      <h1>ConfirmTransaction</h1>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Count</span>
           <input
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
          <span>Amount</span>
          <input type="text"  value={amount}/>
        </label>
        <label>
          <span>Description</span>
          <input type="text"  value={description}  />
        </label>
        <label>
          <span>Date</span>
          <input type="date"   value={date} />
        </label>
        <label>
          <span>Type</span>
          <select  value={
            type === "income" ? "income" : "outcome"
          } > 
            <option value="income">Income</option>
            <option value="outcome">Outcome</option>
          </select>
        </label>

        <button onSubmit={handleSubmit} type="submit">
          Confirm
        </button>
      </form>
    </div>
  );
};
