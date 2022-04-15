import React, { useEffect, useState } from "react";
import { HistoryTransactions } from "../HistoryTransactions/HistoryTransactions";
import { useDispatch, useSelector } from "react-redux";
import { getCardByIdUser, getUserId } from "../../actions/Actions";

export const Balans = () => {
  const { user } = useSelector((state) => state.data); 

const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
dispatch(getUserId(user))
    }, 1000);
}, [dispatch, user]);

useEffect(() => {
  setTimeout(() => {
  dispatch(getCardByIdUser(user))
  }, 1000);
}, [dispatch, user]);

  return (
    <div className="sections">
      <h1>Movimientos</h1>
      <hr />
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Historial de transacciones</h5>
            <HistoryTransactions />
          </div>
        </div>
      </div>
    </div>
  );
};
