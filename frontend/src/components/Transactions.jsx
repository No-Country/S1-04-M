import React from "react";

export const Transactions = () => {
  return (
    <div>
      <h1>Transferir</h1>
      <form>
     <h5>ORIGEN</h5>
     <h6>CUENTA</h6>
     <select>
         <option>Cuenta 1</option>
            <option>Cuenta 2</option>
            <option>Cuenta 3</option>
            </select>   
            <h6>DESTINARIO</h6>
            <button>Agregar</button>
            <select>
            <option>Cuenta 1</option>
            <option>Cuenta 2</option>
            <option>Cuenta 3</option>
            </select>
            <h6>MONTO</h6>
            <input type="text" />
            <h6>CONCEPTO</h6>
            <input type="text" />
            <button>Transferir</button>
        </form>
    <section className="sections">
      <h1>Transacciones</h1>
      <hr />
      <form className="form-transactions">
        <label>
          <span className="label-special">Tarjeta</span>
          <select className="input-special">
            <option value="1">Card 1</option>
            <option value="2">Card 2</option>
            <option value="3">Card 3</option>
          </select>
        </label>
        <input type="submit" value="Elegir" className=" button button-blue" />

        <label>
          <span className="label-special">Fecha</span>
          <input type="date" name="date" className="input-special" />
        </label>

        <label>
          <span className="label-special">Destino</span>
          <select className="input-special">
            <option value="1">Card 1</option>
            <option value="2">Card 2</option>
            <option value="3">Card 3</option>
          </select>
        </label>

        <label>
          <input
            type="number"
            name="amount"
            min={0}
            className="input-text"
            placeholder="Cantidad"
          />
        </label>

        <label>
          <input
            type="text"
            name="description"
            placeholder="Descripción"
            className="input-text"
          />
        </label>

        <input type="submit" value="Filtrar" className="button button-blue" />
      </form>
    </section>
    </div>
  );
};
