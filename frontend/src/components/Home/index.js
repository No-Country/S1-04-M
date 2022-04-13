import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../actions/Actions";
import "./styles.css";
import logo from "../../img/logos/bankforyou.png";

export const Home = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(user));
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
        <img src={logo} alt="logo-banco" />

        <input
          type="email"
          placeholder="Email"
          value={user.email}
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={user.password}
          onChange={handleChange}
        />
        <button className="button" type="submit">
          Iniciar Sesión
        </button>
      </form>
    </section>
  );
};
