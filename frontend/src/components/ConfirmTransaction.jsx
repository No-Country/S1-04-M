import React from 'react'
import { Link } from 'react-router-dom'

export const ConfirmTransaction = () => {
  return (
    <div>
        <h1>ConfirmTransaction</h1>

          <h2>Confirm transaction</h2>


          <form>
              <label>
                  <span>Amount</span>
                  <input type="text" />
              </label>
              <label>
                  <span>Description</span>
                  <input type="text" />
              </label>
              <label>
                  <span>Date</span>
                  <input type="date" />
              </label>
              <label>
                  <span>Type</span>
                  <select>  
                      <option value="income">Income</option>
                      <option value="outcome">Outcome</option>
                  </select>
              </label>

              <button>
                  <Link to="/transactions">Confirm</Link>
              </button>
          </form>


    </div>
  )
}
