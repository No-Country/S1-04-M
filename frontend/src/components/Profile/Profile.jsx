import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Card } from "../Cards/Card";

export default function Profile() {
  const user = useSelector((state) => state.users.userQuery);
  const { card } = useSelector((state) => state);

  return (
    <section className="sections">
      <h2>Cuenta</h2>
      <div className="sections-grid">
        <div className=" card">
          <h3 className="card-header">Mis datos</h3>
          <div className="card-body">
            <p>
              <h4>Nombre</h4>
              <p>{user.name}</p>
            </p>
            <h4>Apellido</h4>
            <p>{user.lastname}</p>
            <h4>DNI</h4>
            <p>{user.dni}</p>
            <h4>Fecha de nacimiento</h4>
            <p>{user.date.slice(0, 10)}</p>
            <h4>Correo</h4>
            <p>{user.email}</p>
            <h4>Telefono</h4>
            <p>{user.phone}</p>
            <h4>País</h4>
            <p>{user.country}</p>
            <h4>Ciudad</h4>
            <p>{user.city}</p>
            <h4>Cod. Postal</h4>
            <p>{user.cp}</p>
          </div>
        </div>
        <div className="card">
          <h3 className="card-header">Mis tarjetas</h3>
          <div>
            {card ?
              card?.map((card) => (
                <Card
                  key={card.id}
                  card={card}
                  />
              )) : (
                <p>No tienes tarjetas</p>
              )}
          </div>
        </div>
      </div>
    </section>
  );
}
