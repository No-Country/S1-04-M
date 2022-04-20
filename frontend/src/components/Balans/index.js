import React, { useEffect } from "react";
import { HistoryTransactions } from "../HistoryTransactions/HistoryTransactions";
import { Link } from "react-router-dom";
import useTransactions from "../../hooks/useTransactions";
import { useDispatch, useSelector } from "react-redux";
import { getCardByIdUser, getUserId } from "../../actions/Actions";
import { Card } from "../Cards/Card";

export const Balans = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.data);
  const { card } = useSelector((state) => state);
  const { transactions, isError, isLoading, setMode, mode } = useTransactions();

  useEffect(() => {
    setTimeout(() => {
      dispatch(getUserId(user));
    }, 20);
  }, [dispatch, user]);

  useEffect(() => {
    setTimeout(() => {
      dispatch(getCardByIdUser(user));
    }, 20);
    mode !== "all" && setMode("all");
  }, []); // eslint-disable-line

  return (
    <div className="sections">
      <h2>Movimientos</h2>
      <div className="sections-grid">
        {card.length ? (
          card.map((card) => (
            <div className="container-card">
              <Card key={card.id} card={card} />
            </div>
          ))
        ) : (
          <div className="container-card">
            {card?.map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </div>
        )}
        <div className="card">
          <div className="card-body">
            <h5 className="card-title title-subgeneral">
              Historial de transacciones
            </h5>
            <HistoryTransactions
              transactions={transactions.slice(0, 5)}
              isLoading={isLoading}
              isError={isError}
            />
            <Link
              className="button"
              style={{ backgroundColor: "rgb(72, 196, 58)" }}
              to="/history"
            >
              Ver más
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
