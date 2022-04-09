import React from "react";
import "../css/estilos.css";
import visa from "../img/logos/visa.png";
import chip from "../img/chip-tarjeta.png";

export const Card = () => {
  return (
    <div className="contenedor">
      <section className="tarjeta " id="tarjeta">
        
    <div className="delantera">
          <div className="logo-marca">
            <img src={visa} alt=" " />
          </div>
          <img src={chip} className="chip" alt="" />
          <div className="grupo" id="numero">
            <p className="label">Numero tarjeta</p>
            <p className="numero">Numero</p>
          </div>
          <div className="flexbox">
            <div className="grupo" id="nombre">
              <p className="label">Nombre Tarjeta</p>
              <p className="nombre">Nombre</p>
            </div>
            <div className="grupo" id="expiracion">
              <p className="label">Expiracion</p>
              <p className="expiracion">
                <span className="mes">MM</span> /{" "}
                <span className="year">AA</span>
              </p>
            </div>
          </div>
        </div>

        <div className="trasera">
          <div className="barra-magnetica"></div>
          <div className="datos">
            <div className="grupo" id="firma">
              <p className="label">Firma</p>
              <div className="firma">
                <p></p>
              </div>
            </div>
            <div className="grupo" id="ccv">
              <p className="label">CCV</p>
              <p className="ccv"></p>
            </div>
          </div>
          <p className="leyenda">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            exercitationem, voluptates illo.
          </p>
          <a href="#" className="link-banco">
            www.tubanco.com
          </a>
        </div>
      </section>
    </div>
  );
};
