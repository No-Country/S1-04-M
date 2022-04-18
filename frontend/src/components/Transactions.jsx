import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getDestinationCardById } from "../actions/Actions";

export const Transactions = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch() 

    const [transaction, setTansaction] = useState({
        count_user: "",
        count_destiny: "",
        id_destiny: "",
        amount: "",
      description: "",
    });
    const {user} = useSelector(state => state.data);
    const {card} = useSelector(state => state);
    const {destinationCard}= useSelector(state => state);
    useEffect(() => {
      dispatch(getDestinationCardById(user));
    }, [dispatch]);


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
        id_destiny: "",
        amount: "",
        description: "",
      });
      navigate("/confirm");
    };

const handleRedirect = (e) => {
  e.preventDefault();
  navigate("/addcardtransfer");
};

    return (
      <div>
        <section className="sections">
          <h1>Transacciones</h1>
          <hr />
          <form className="form-transactions" onSubmit={handleSubmit}>
            <label>
              <span className="label-special">CUENTA ORIGEN</span>
              {card ? (
                card?.map((card) => (
                <select
                  className="input-special"
                  value={transaction.count_user}
                  name="count_user"
                  onChange={handleChange}
                >
                  <option>Selecciona tu tarjeta</option>

                  <option value={card._id}>{card.number}</option>
                </select>
              ))): (
                <span>No tienes cuentas</span>
              )}
              </label>
            <span className="label-special">DESTINARIO</span>
            <label>
              <button className="button button-blue" onClick={handleRedirect}>
                Agregar
              </button>
              {destinationCard.length > 0 ? (
                destinationCard?.map((destinationCard) => (      
                    <select
                    className="input-special"
                    value={transaction.count_destiny}
                    name="count_destiny"
                    onChange={handleChange}
                  >
                    <option value={destinationCard.id}>
                      {destinationCard.alias}
                    </option>
                    <option value={destinationCard._id}>
                      {destinationCard.card_number}
                    </option>
                  </select>

                )) 
                
              ) : (
                <span>No hay tarjetas de destino</span>
              )}
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
