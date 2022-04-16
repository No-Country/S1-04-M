import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../actions/Actions";
import "./styles.css";
import logo from "../../img/logos/bankforyou.png";
import PassVisible from "../PassVisible/PassVisible";

export const Home = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [isError, setIsError] = useState(false);
  const isUser = useSelector((state) => state.data);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(user));
    console.log(isUser);
    if (isUser.hasOwnProperty("error")) {
      setIsError(true);
      // return;
    }
    if (isError) setIsError(false);
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
        <PassVisible handleChange={handleChange} value={user.password} />

        <button className="button" type="submit">
          Iniciar Sesión
        </button>

        <Link className="button" to="/register">
          Registrarse
        </Link>
        {isError && (
          <span className="error">Email o contraseña incorrecta</span>
        )}
      </form>
    </section>
  );
};
