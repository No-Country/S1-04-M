import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getDestinationCardById, postDestinationCard, postTransactions } from "../actions/Actions";


export const ConfirmTransaction = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

 const { user } = useSelector ((state) => state.data);
 const { card } = useSelector((state) => state);
 const { destinationCard } = useSelector((state) => state);
 const { transactions } = useSelector((state) => state);

 useEffect(() => {
   dispatch(getDestinationCardById(user));
 }, [dispatch]);

 
  const transaction = JSON.parse(sessionStorage.getItem("transaction")) || "";
  const count_user = transaction.count_user;
  const count_destiny = transaction.count_destiny;
  const amount = transaction.amount;
  const description = transaction.description;
  
  const [transfer] = useState({
    amount: amount,
    origin: count_user,
    destiny: count_destiny,
    description: description,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postTransactions(transfer));
    
      sessionStorage.removeItem("transaction");
      navigate("/balans");
    }

    const handleRedirect = (e) => {
      e.preventDefault();
      navigate("/newtransaction");
    };


  return (
    <div>
      <h1 >Confirmar Transaccion</h1>

      <form onSubmit={handleSubmit} className="form-transactions">
        <label>
          <span className="label-special">CUENTA ORIGEN</span>
          {
          card.length > 0 ? (
            card?.map((card) => (
              <select
                className="input-special"
                value={count_user}
                name="count_user"
                disabled
              >
                <option value={card._id}>{card.number}</option>
              </select>
            ))
          ) : (
            <span>No tienes cuentas</span>
          )}
        </label>
        <span className="label-special">DESTINARIO</span>
        <label>
          <button className="button button-blue" >
            Agregar
          </button>
          {destinationCard.length > 0 ? (
            destinationCard?.map((destinationCard) => (
              <select
                className="input-special"
                value={count_destiny}
                name="count_destiny"
                disabled
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
            placeholder="Cantidad"
            value={amount}
            disabled
          />
        </label>
        <label>
          <input
            type="text"
            name="description"
            placeholder="CONCEPTO"
            className="input-text"
            value={description}
            disabled
          />
        </label>
        <button className="button button-blue" type="onSubmit">
          Transferir
        </button>
        <button className="button button-blue" onClick={handleRedirect}>
          Cancelar
        </button>
      </form>
    </div>
  );
};
