import Transaction from "../Transaction";
import "./styles.css";

export const HistoryTransactions = ({
  transactions = [],
  isLoading,
  isError,
}) => {
  return (
    <div className="card">
      <section className="card-body">
        <ul className="transactions-list">
          {!isLoading && transactions.length ? (
            transactions.map((transaction) => (
              <Transaction
                key={transaction._id}
                info={{
                  date: transaction.created_at
                    ? transaction.created_at?.slice(0, 10)
                    : "",
                  title: transaction.description,
                  amount: transaction.amount,
                }}
              />
            ))
          ) : isLoading ? (
            <span>Cargando...</span>
          ) : !isError && isLoading ? (
            <span>No se encontraron resultados</span>
          ) : (
            <span>
              Ocurrio un error vuelve a intentarlo o reinicia la página por
              favor
            </span>
          )}
        </ul>
      </section>
    </div>
  );
};
