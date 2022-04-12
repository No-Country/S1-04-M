import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { lastCardNumber, register } from "../actions/Actions";

export const Register = () => {
  const navigate = useNavigate();

  const [card, setCard] = useState({
    number: "",
  });
  const CardNumber = sessionStorage.getItem("CardNumber");
  if(CardNumber){
  setCard({ number: CardNumber });
  }

  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    lastname: "",
    email: "",
    dni: "",
    phone: "",
    adress: "",
    city: "",
    country: "",
    cp: "",
    cardNumber: "",
    password: "",
    password2: "",
    date: "",
  });

  const handleCreateCardNumber = (e) => {
    dispatch(lastCardNumber());
      setUser({
        ...user,
        cardNumber: card.number,
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(user));
    console.log(user);
    navigate("/balans");
   
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="login-container">
      <form onSubmit={handleSubmit}>
        <img
          src="https://images.vexels.com/media/users/3/129286/isolated/preview/f71f09d3aa7db678ee884a2cdea1a435-simbolo-del-edificio-del-banco.png"
          alt="logo-banco"
        />
        <h1>Registrate</h1>
        <input
          type="text"
          placeholder="Nombre"
          value={user.name}
          name="name"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Apellido"
          value={user.lastname}
          name="lastname"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="DNI / Identificacion"
          value={user.dni}
          name="dni"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Correo"
          value={user.email}
          name="email"
          onChange={handleChange}
        />
        <input
          type="tel"
          maxLength="10"
          minLength={10}
          placeholder="Telefono"
          value={user.phone}
          name="phone"
          onChange={handleChange}
        />
        <input
          type="date"
          placeholder="Fecha de nacimiento"
          value={user.date}
          name="date"
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Direccion"
          value={user.adress}
          name="adress"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Ciudad"
          value={user.city}
          name="city"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Pais"
          value={user.country}
          name="country"
          onChange={handleChange}
        />
        <input
          type="number"
          min="0"
          maxLength="7"
          placeholder="Codigo Postal"
          value={user.cp}
          name="cp"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={user.password}
          name="password"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Confirmar Contraseña"
          value={user.password2}
          name="password2"
          onChange={handleChange}
        />
        <input
          type="checkbox"
          onClick={handleCreateCardNumber}
          /* style={{ display: "none" }} */
          value={card.number}
          name="cardNumber"
          checked={true}
        />

        <button type="submit">Registrarse</button>
      </form>
    </section>
  );
};
