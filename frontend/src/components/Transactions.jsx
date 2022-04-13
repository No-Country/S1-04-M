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
    </div>
    );
};
