import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getDestinationCardById } from "../actions/Actions";

export const Transactions = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [countDestiny, setCountDestiny] = useState(undefined);
  const [transaction, setTansaction] = useState({
    count_user: "",
    count_destiny: "",
    destiny_name: "",
    amount: "",
    description: "",
  });
  const { user } = useSelector((state) => state.data);
  const { card } = useSelector((state) => state);
  const { destinationCard } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getDestinationCardById(user));
  }, [dispatch,destinationCard]);

  useEffect(() => {
    if (!countDestiny) return;
    const user = destinationCard.length
      ? destinationCard.find((cardEl) => cardEl._id === countDestiny)
      : undefined;
    console.log("hay user?", user);
    if (user) {
      setTansaction((prevState) => ({
        ...prevState,
        destiny_name: user.alias,
      }));
    }
  }, [countDestiny]);

  const handleChange = (event) => {
    if (event.target.name === "count_destiny" && event.target.value) {
      setCountDestiny(event.target.value);
    }
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
      destiny_name: "",
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
        <h2>Transacciones</h2>
        <form className="form-transactions" onSubmit={handleSubmit}>
          <label>
            <span className="label-special">CUENTA ORIGEN</span>
            <select
              className="input-special"
              value={transaction.count_user}
              name="count_user"
              onChange={handleChange}
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
              value={transaction.count_destiny}
              name="count_destiny"
              onChange={handleChange}
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
          <button className="button button-blue" type="submit">
            Transferir
          </button>
        </form>
      </section>
    </div>
  );
};
