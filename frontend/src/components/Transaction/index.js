import "./styles.css";

export default function Transaction({ number, info }) {
  return (
    <li className="transaction">
      <span>Transacción {number || ""}</span>
      <h3>{info?.title || ""}</h3>
      <p>
        <span>Fecha: {info?.date || ""}</span>
        <span>Monto: ${info?.amount || ""}</span>
      </p>
    </li>
  );
}
