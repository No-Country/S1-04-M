import React, { useState } from 'react'
import { HistoryTransactions } from './HistoryTransactions'


export const Balans = () => {

 sessionStorage.removeItem("CardNumber");

  return (

    <div>
    
       


       <h1>Balans</h1>
       <HistoryTransactions/>

    <h2>Available</h2>

    <h2>Pending</h2>

    
    </div>


  )
}
