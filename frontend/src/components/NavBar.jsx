
import React/* , { useContext } */ from "react";
/* import { useState } from "react"; */
import "./NavBar.css";
import { useNavigate } from "react-router-dom"; //hook

export default function NavBar( { navigationStatus, setNavigationStatus }) {
  
  /* const [click, setClick] = useState(false); */

   const navigate = useNavigate();

   
  const goHome = () => {
    navigate("/");
  };

  return (


<nav className="navbar navbar-expand-lg navbar-light  navbar-color ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">   <img className = "logo"
          src="https://images.vexels.com/media/users/3/129286/isolated/preview/f71f09d3aa7db678ee884a2cdea1a435-simbolo-del-edificio-del-banco.png"
          alt="logo-banco" onClick={goHome}/></a>

    <button className="navbar-toggler text-info" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li class="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-info" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Transacciones
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="/newtransaction">Nueva Transacción</a></li>
            <li><a className="dropdown-item" href="#">Historia de Transacciones</a></li>
            <li><a className="dropdown-item" href="#">Gráfica de Transacciones</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link text-info" href="#">Configuración de Cuenta</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-info" href="/">Cerrar Sesión</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

 );
}