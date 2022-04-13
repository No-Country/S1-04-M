import React /* , { useContext } */ from "react";
/* import { useState } from "react"; */
import "./NavBar.css";
import { useNavigate } from "react-router-dom"; //hook
import { Link } from "react-router-dom";
import logo from "../img/logos/bankforyou.png";
export default function NavBar({ navigationStatus, setNavigationStatus }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light  navbar-color ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            className="logo"
            style={{ marginBlockEnd: "0" }}
            src={logo}
            alt="logo-banco"
          />
        </Link>

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
                    Historia de Transacciones
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Gráfica de Transacciones
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link text-info nav-item-white" href="#">
                Configuración de Cuenta
              </a>
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
