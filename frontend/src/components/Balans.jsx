import React from 'react'
import { HistoryTransactions } from './HistoryTransactions'
import NavBar from './NavBar'

export const Balans = () => {
  return (

    <div>
    
       <NavBar/>


       <h1>Balans</h1>
       <HistoryTransactions/>

    <h2>Available</h2>

    <h2>Pending</h2>

    
    </div>


  )
}
