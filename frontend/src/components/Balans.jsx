import React from 'react'
import { Link } from 'react-router-dom'

export const Balans = () => {
  return (
    <div>
        <h1>Balans</h1>
    <h2>Available</h2>
    <h2></h2>

    <h2>Pending</h2>
    <h2></h2>

   <Link to="/transactions"><button>
       Transactions
       </button>
       </Link>
    
    </div>


  )
}
