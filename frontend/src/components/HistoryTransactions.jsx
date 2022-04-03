import React from 'react'
import { Link } from 'react-router-dom'

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



