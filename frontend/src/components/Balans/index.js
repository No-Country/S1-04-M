import React, { useEffect, useState } from "react";
import { HistoryTransactions } from "../HistoryTransactions/HistoryTransactions";
import { Link } from "react-router-dom";
import useTransactions from "../../hooks/useTransactions";
import { useDispatch, useSelector } from "react-redux";
import { getCardByIdUser, getUserId } from "../../actions/Actions";

export const Balans = () => {
  const { user } = useSelector((state) => state.data);
  const { transactions, isError, isLoading, setMode, mode } = useTransactions();

  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(getUserId(user));
    }, 1000);
  }, [dispatch, user]);

  useEffect(() => {
    setTimeout(() => {
      dispatch(getCardByIdUser(user));
    }, 1000);
  }, [dispatch, user]);

  useEffect(() => {
    mode !== "all" && setMode("all");
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
