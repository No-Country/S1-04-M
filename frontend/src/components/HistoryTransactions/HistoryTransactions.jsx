import React from "react";
import { Link } from "react-router-dom";
import Transaction from "../Transaction";
import "./styles.css";

const transactionsDummy = [
  {
    number: 1,
    date: "21/01/2022",
    title: "Corte Salón",
    amount: 150.3,
    status: "acepted",
  },
  {
    number: 2,
    date: "04/02/2022",
    title: "Impuesto gas",
    amount: 3500,
    status: "acepted",
  },
  {
    number: 3,
    date: "12/02/2022",
    title: "Corte Salón",
    amount: 150.3,
    status: "acepted",
  },
  {
    number: 4,
    date: "22/03/2022",
    title: "Spiderman ps5 digital",
    amount: 6000,
    status: "pending",
  },
];

export const HistoryTransactions = () => {
  return (
    <div className="card">
      <section className="card-body">
        <ul className="transactions-list">
          {transactionsDummy.map((transaction) => (
            <Transaction
              number={transaction.number}
              info={{
                date: transaction.date,
                title: transaction.title,
                amount: transaction.amount,
                status: transaction.status,
              }}
            />
          ))}
        </ul>
      </section>
      <Link to="/newtransaction" className="button button-blue">
        Nueva Transacción
      </Link>
    </div>
  );
};
