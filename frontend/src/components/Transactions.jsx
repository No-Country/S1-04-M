import React from "react";
import { useNavigate } from "react-router-dom";

export const Transactions = () => {

    const navigate = useNavigate();

    /* const dispatch c= useDispatch() */

    const [transaction, setTansaction] = React.useState({
        count_user: "",
        count_destiny: "",
        amount: "",
      description: "",
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
        count_user: "",
        count_destiny: "",
        amount: "",
        description: "",
        type: "",
      });
      navigate("/confirm");
    };


    return (
      <div>
        <section className="sections">
          <h1>Transacciones</h1>
          <hr />
          <form className="form-transactions" onSubmit={handleSubmit}>
            <label>
              <span className="label-special">CUENTA ORIGEN</span>
              <select className="input-special" value={transaction.count_user} name="count_user" onChange={handleChange}>
                <option value="1">Card 1</option>
                <option value="2">Card 2</option>
                <option value="3">Card 3</option>
              </select>
            </label>
            <button className="button button-blue">Elegir</button>

            <span className="label-special">DESTINARIO</span>
            <label>
              <button className="button button-blue">Agregar</button>
              <select
                className="input-special"
                value={transaction.count_destiny}
                name="count_destiny"
                onChange={handleChange}
              >
                <option value="1">Card 1</option>
                <option value="2">Card 2</option>
                <option value="3">Card 3</option>
              </select>
            </label>
            <label>
              <input
                type="number"
                name="amount"
                min={0}
                className="input-text"
                onChange={handleChange}
                placeholder="Cantidad"
                value={transaction.amount}
              />
            </label>
            <label>
              <input
                type="text"
                name="description"
                onChange={handleChange}
                placeholder="CONCEPTO"
                className="input-text"
                value={transaction.description}
              />
            </label>
            <button className="button button-blue" type="onSubmit">
              Transferir
            </button>
          </form>
        </section>
      </div>
    );
};
