import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { About } from '../components/About'
import { Balans } from '../components/Balans'
import { ConfirmTransaction } from '../components/ConfirmTransaction'
import { HistoryTransactions } from '../components/HistoryTransactions'
import { Home } from '../components/Home'
import  {NewCard}  from '../components/NewCard'
import NewTransaction from '../components/NewTransaction'
import { Sesion } from '../components/Sesion'
import { Transactions } from '../components/Transactions'
import NavBar from '../components/NavBar'
import { useLocation } from "react-router-dom";


export const Pages = () => {

  let location = useLocation(); 

  return (
    <div>
       {location.pathname != "/"  && <NavBar/>}   
       <Routes>
        
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />  
       
       
        <Route path="/transactions" element={<Transactions/>} />
        <Route path="/balans" element={<Balans/>} />   
        <Route path="/history" element={<HistoryTransactions/>} />
        <Route path="/confirm" element={<ConfirmTransaction/>} />
        <Route path="/closesesion" element={<Sesion/>} />
        <Route path="/newtransaction" element={<NewTransaction/>} /> 
        <Route path="/newcard" element={<NewCard/>} />
    </Routes>
  )
}
