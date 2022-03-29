import React from 'react'
import { Link } from 'react-router-dom'

const NewTransaction = () => {
  return (
    <div>
        <h1>NewTransaction</h1>

        <div>
            <button>
                <Link to="/">Home</Link>
            </button>

            <button>
                <Link to="/transactions">Transactions</Link>
            </button>

            <button>
                <Link to="/about">About</Link>
            </button>

            <button>
                <Link to="/balans">Balans</Link>
            </button>

            <button>
                <Link to="/history">History</Link>
            </button>

            <button>
                <Link to="/confirm">Confirm</Link>
            </button>


    </div>

    </div>
  )
}

export default NewTransaction
