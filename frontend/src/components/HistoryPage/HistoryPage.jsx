import { HistoryTransactions } from "../HistoryTransactions/HistoryTransactions";
import useTransactions from "../../hooks/useTransactions";
import { useState } from "react";

export default function HistoryPage() {
  const { transactions, isError, isLoading, urlReport, setMode, setDate } =
    useTransactions();
  const [month, setMonth] = useState("00");

  const handleSubmit = (e) => {
    e.preventDefault();
    return;
  };

  const handleClickFilter = (e) => {
    setMode("forMonth");
    setDate(month);
    return;
  };

  const handleChangeMonth = (e) => {
    setMonth(e.target.value);
  };

  const handleClickShowAll = () => {
    setMode("all");
  };

  return (
    <section className="sections">
      <h2>Historial de transacciones</h2>

      <form className="form-transactions" onSubmit={handleSubmit}>
        <label>
          <span className="label-special">Mes</span>
          <select className="input-special" onChange={handleChangeMonth}>
            <option value="00">Enero</option>
            <option value="01">Febrero</option>
            <option value="02">Marzo</option>
            <option value="03">Abril</option>
            <option value="04">Mayo</option>
            <option value="05">Junio</option>
            <option value="06">Julio</option>
            <option value="07">Agosto</option>
            <option value="08">Septiembre</option>
            <option value="09">Octubre</option>
            <option value="10">Noviembre</option>
            <option value="11">Diciembre</option>
          </select>
        </label>

        <label>
          <span className="label-special">Año</span>
          <select className="input-special">
            <option value="2022">2022</option>
          </select>
        </label>
        <br />
        <button className="button" onClick={handleClickFilter}>
          Fitrar
        </button>
        <buton className="button" onClick={handleClickShowAll}>
          Todo
        </buton>
        <a
          rel="noreferrer"
          className="button"
          download={"reporte.pdf"}
          target="_blank"
          href={urlReport || "#"}
          disabled={urlReport ? true : false}
        >
          Descargar Reporte
        </a>
      </form>

      <section className="card card-body">
        <HistoryTransactions
          transactions={transactions}
          isLoading={isLoading}
          isError={isError}
        />
      </section>
    </section>
  );
}