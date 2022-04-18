import "./styles.css";

export default function Transaction({ number, info }) {
  return (
    <li className="transaction">
      <span>Transacción {number || ""}</span>
      <h3 className="title-subgeneral">{info?.title || ""}</h3>
      <div>
        <p>
          <h5 className="title-small">Fecha:</h5>
          <span>{info?.date || ""}</span>
        </p>
        <p>
          <h5 className="title-small">Monto:</h5>
          <span>${info?.amount || ""}</span>
        </p>
      </div>
    </li>
  );
}
