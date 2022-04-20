import React /* , { useContext } */ from "react";
/* import { useState } from "react"; */
import "./NavBar.css";
/* import { useNavigate } from "react-router-dom"; //hook */
import { Link } from "react-router-dom";
import logo from "../img/logos/bankforyou.png";
export default function NavBar({ navigationStatus, setNavigationStatus }) {

  const token = sessionStorage.getItem("token");

  return (
    <nav className="navbar navbar-expand-lg navbar-light  navbar-color ">
      <div className="container-fluid">
{
  token ? (
    <div className="navbar-header">
      <Link to="/balans">
        <img src={logo} alt="logo" className="logo" />
      </Link>
    </div>
  ) : (
    <div className="navbar-header">
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>
    </div>
  )
}

        <button
          className="navbar-toggler text-info"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li class="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle text-info nav-item-white"
                to="/"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Transacciones
              </Link>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link className="dropdown-item" to="/newtransaction">
                    Nueva Transacción
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/history">
                    Historial de Transacciones
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-info nav-item-white" to="/balans">
                Movimientos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-info nav-item-white" to="/profile">
                Mi Cuenta
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-info nav-item-white "
                to="/closesesion"
              >
                Cerrar Sesión
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
