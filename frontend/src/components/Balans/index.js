import React, { useEffect} from "react";
import { HistoryTransactions } from "../HistoryTransactions/HistoryTransactions";
import { useDispatch, useSelector } from "react-redux";
import { getCardByIdUser, getUserId } from "../../actions/Actions";
import { Card } from "../Cards/Card";

export const Balans = () => {
  const { user } = useSelector((state) => state.data); 
const {card} = useSelector((state) => state);

const dispatch = useDispatch();

  useEffect(() => {
dispatch(getUserId(user))
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
            <HistoryTransactions />
          </div>
        </div>
      </div>
    </div>
  );
};
