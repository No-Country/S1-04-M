import React, { useEffect, useState } from "react";
import { HistoryTransactions } from "../HistoryTransactions/HistoryTransactions";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useTransactions from "../../hooks/useTransactions";

export const Balans = () => {
  const { user } = useSelector((state) => state.user);
  const { transactions, isError, isLoading, setMode } = useTransactions();

  sessionStorage.removeItem("CardNumber");

  useEffect(() => {
    setMode("all");
  }, []); // eslint-disable-line

  return (
    <div className="sections">
      <h1>Movimientos</h1>
      <hr />
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Historial de transacciones</h5>
            <HistoryTransactions
              transactions={transactions.splice(0, 5)}
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
