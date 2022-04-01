import React from 'react'
import { Link } from 'react-router-dom'
<<<<<<< HEAD
=======
/* import { Transactions } from './Transactions' */
>>>>>>> 611d5f2f875df9242f68849627f8369353f25f65

export const HistoryTransactions = () => {
  return (

    <div>
            <section>
                <h2>Transactions</h2>
                <ul>
                    <li>
                        <h3>Transaction 1</h3>
                        <p>
                            <span>Date:</span>
                            <span>Amount:</span>
                            <span>Status:</span>
                        </p>
                    </li>
                    <li>
                        <h3>Transaction 2</h3>
                        <p>
                            <span>Date:</span>
                            <span>Amount:</span>
                            <span>Status:</span>
                        </p>
                    </li>
                    <li>
                        <h3>Transaction 3</h3>
                        <p>
                            <span>Date:</span>
                            <span>Amount:</span>
                            <span>Status:</span>
                        </p>
                    </li>
                </ul>

                         </section>
              <button>
                  <Link to="/newtransaction">New transaction</Link>
              </button>
              </div>
  )
}



