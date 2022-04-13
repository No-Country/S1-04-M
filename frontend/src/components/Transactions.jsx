import React from "react";

export const Transactions = () => {
  return (
    <div>
      <h1>Transferir</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Tarjeta</h5>
                <p className="card-text">
                  <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">
                      Selecciona la tarjeta de origen
                    </label>
                    <select
                      className="form-control"
                      id="exampleFormControlSelect1"
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Tarjeta</h5>
                  <p className="card-text">
                    <div className="form-group">
                      <label htmlFor="exampleFormControlSelect1">
                        Selecciona la tarjeta de destino
                      </label>
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Monto</h5>
                    <p className="card-text">
                      <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">
                          Monto a transferir
                        </label>
                        <input
                          type="number"
                          min={0}
                            maxLength="7"
                          className="form-control"
                          id="exampleFormControlSelect1"
                        />
                      </div>
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">

              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Comentario</h5>
                    <p className="card-text">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleFormControlSelect1"
                        />
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </div>
              </div>
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
