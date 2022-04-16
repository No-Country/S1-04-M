import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home/styles.css";
import { useDispatch } from "react-redux";
import { register } from "../actions/Actions";
import logo from "../img/logos/bankforyou.png";

export const Register = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

const [error, setError] = useState(false);

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

 const ifFormIsValid = () => {
    if (user.name === "" ) {
      setError("Falta el nombre")
      return false;
    }
    if (user.lastname === "") {
      setError("Falta el apellido")
      return false;
    }
    if (user.email === "") {
      setError("Falta el email")
      return false;
    }
    if (user.dni === "") {
      setError("Falta el dni")
      return false;
    }
    if (user.phone === "") {
      setError("Falta el numero de telefono")
      return false;
    }
    if (user.adress === "") {
      setError("Falta la direccion")
      return false;
    }
    if (user.city === "") {
      setError("Falta la ciudad")
      return false;
    }
    if (user.country === "") {
      setError("Falta el pais")
      return false;
    }
    if (user.cp === "") {
      setError("Falta el codigo postal")
      return false;
    }
    if (user.password !== user.password2) {
      setError("Las contraseñas no coinciden")
      return false;
    }
    if (user.date === "") {
      setError("Falta la fecha de nacimiento")
      return false; 
    } 
    return true;
  }

  const token = sessionStorage.getItem("token");

  const handleRedirect = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ifFormIsValid()) {
    dispatch(register(user));
  }
  if(token){ 
    navigate("/balans");
  }
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="login-container">
      <form onSubmit={handleSubmit} style={{ height: "100%" }}>
        <img src={logo} alt="logo-banco" />
        <h1>Registrate</h1>
        <h4 className="error">{error}</h4>
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
        <button type="submit" className="button">
          Registrarse
        </button>

        <button type="button" className="button" onClick={handleRedirect}>
          Ingresar
        </button>
      </form>
    </section>
  );
};
