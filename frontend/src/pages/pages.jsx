import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About } from '../components/About'
import { Balans } from '../components/Balans'
import { ConfirmTransaction } from '../components/ConfirmTransaction'
import { HistoryTransactions } from '../components/HistoryTransactions'
import { Home } from '../components/Home'
import NewTransaction from '../components/NewTransaction'
import { Sesion } from '../components/Sesion'
import { Transactions } from '../components/Transactions'

export const Pages = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />  
        <Route path="/transactions" element={<Transactions/>} />
        <Route path="/balans" element={<Balans/>} />   
        <Route path="/history" element={<HistoryTransactions/>} />
        <Route path="/confirm" element={<ConfirmTransaction/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/closesesion" element={<Sesion/>} />
        <Route path="/newtransaction" element={<NewTransaction/>} /> 

    </Routes>
  )
}
