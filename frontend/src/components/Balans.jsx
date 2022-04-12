import React, { useState } from 'react'
import { HistoryTransactions } from './HistoryTransactions'


export const Balans = () => {

 sessionStorage.removeItem("CardNumber");

  return (

    <div className="container">
      <div className="row">
        <h1>Balanse</h1>

        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Transactions</h5>
              <HistoryTransactions />
              </div>
              </div>
              </div>
              </div>
    </div>


  )
}
