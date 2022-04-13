import React from "react";
/* import {useDispatch} from 'react-redux'
import { Transactions } from './Transactions' */
import { useNavigate } from "react-router-dom";

const NewTransaction = () => {
  const navigate = useNavigate();

  /* const dispatch c= useDispatch() */

  const [transaction, setTansaction] = React.useState({
    amount: "",
    description: "",
    date: "",
    type: "",
  });

  const handleChange = (event) => {
    setTansaction({
      ...transaction,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("transaction", JSON.stringify(transaction));
    setTansaction({
      count: "",
      amount: "",
      description: "",
      date: "",
      type: "",
    });
    navigate("/confirm");
  };

  return (
    <div>
      <h1>NewTransaction</h1>

      <form onSubmit={handleSubmit} className="form-transactions">
        <label>
          <input
            className="input-text"
            type="tel"
            inputMode="numeric"
            pattern="[0-9\s]{13,16}"
            maxLength="16"
            name="count"
            value={transaction.count}
            onChange={handleChange}
            placeholder="Número de tarjeta"
          />
        </label>
        <label>
          <input
            className="input-text"
            type="text"
            onChange={handleChange}
            value={transaction.amount}
            name="amount"
            placeholder="cantidad"
          />
        </label>
        <label>
          <input
            className="input-text"
            placeholder="descripción"
            type="text"
            onChange={handleChange}
            value={transaction.description}
            name="description"
          />
        </label>
        <label>
          <span className="label-special">Fecha</span>
          <input
            className="input-special"
            type="date"
            onChange={handleChange}
            value={transaction.date}
            name="date"
          />
        </label>
        <label>
          <span className="label-special">Tipo</span>
          <select
            className="input-special"
            onChange={handleChange}
            value={transaction.type}
            name="type"
          >
            <option value="income">Income</option>
            <option value="outcome">Outcome</option>
          </select>
        </label>
        <button className="button-blue">Confirm</button>
      </form>
    </div>
  );
};

export default NewTransaction;
