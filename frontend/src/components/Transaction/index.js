import "./styles.css";

export default function Transaction({ number, info }) {
  return (
    <li className="transaction">
      <span>Transacción {number || ""}</span>
      <h3>{info?.title || ""}</h3>
      <p>
        <span>Date: {info?.date || ""}</span>
        <span>Amount: {info?.amount || ""}</span>
        <span>Status: {info?.status || ""}</span>
      </p>
    </li>
  );
}
