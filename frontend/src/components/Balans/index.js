import React, { useEffect} from "react";
import { HistoryTransactions } from "../HistoryTransactions/HistoryTransactions";
import { Link } from "react-router-dom";
import useTransactions from "../../hooks/useTransactions";
import { useDispatch, useSelector } from "react-redux";
import { getCardByIdUser, getUserId } from "../../actions/Actions";
import { Card } from "../Cards/Card";

export const Balans = () => {
  const { user } = useSelector((state) => state.data); 
const {card} = useSelector((state) => state);
  const { transactions, isError, isLoading, setMode } = useTransactions();

  const dispatch = useDispatch();

  useEffect(() => {
    if(user?.length > 0){
dispatch(getUserId(user))
    }
}, [dispatch, user]);

useEffect(() => {
  dispatch(getCardByIdUser(user))
}, [dispatch, user]);

  return (
    <div className="sections">
      {card?._id?.length > 0 ? (
        <Card card={card} />
      ) : (
        <div> 
          <p>Cargando...</p>
        </div>
      )}

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
