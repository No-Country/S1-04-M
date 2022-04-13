import React, { useState } from "react";
import { HistoryTransactions } from "../HistoryTransactions/HistoryTransactions";
import { useSelector } from "react-redux";

export const Balans = () => {
  const { user } = useSelector((state) => state.user);

  sessionStorage.removeItem("CardNumber");

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
