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
      <h1>Confirmar Transaccion</h1>

      <form onSubmit={handleSubmit} className="form-transactions">
          <label>
            <span className="label-special">CUENTA ORIGEN</span>
            <select
              className="input-special"
              value={count_user}
              name="count_user"
            >
              <option>Selecciona tu tarjeta</option>
              {card ? (
                card?.map((card) => (
                  <option value={card?._id}>{card.number}</option>
                ))
              ) : (
                <span>No tienes cuentas</span>
              )}
            </select>
          </label>
          <br />
          <button className="button button-blue" onClick={handleRedirect}>
            Agregar Destino
          </button>
          <label>
            <span className="label-special">N° Cuenta Destinatario</span>
            <select
              className="input-special"
              value={count_destiny}
              name="count_destiny"
            >
              <option value="">Elegir cuenta de destino</option>
              {destinationCard?.length > 0 ? (
                destinationCard?.map((destinationCard) => (
                  <option value={destinationCard._id}>
                    {destinationCard.destination_name}
                  </option>
                ))
              ) : (
                <span>No hay tarjetas de destino</span>
              )}
            </select>
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
          <button className="button button-blue" type="submit">
            Transferir
          </button>
      </form>
    </div>
  );
};
