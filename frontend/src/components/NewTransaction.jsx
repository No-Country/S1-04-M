import React from 'react'
import { Link } from 'react-router-dom'
/* import {useDispatch} from 'react-redux'
import { Transactions } from './Transactions' */

const NewTransaction = () => {

/* const dispatch = useDispatch() */

const [transaction, setTansaction] = React.useState({
    amount: '',
    description: '',
    date: '',
    type: ''
})

    const handleChange = (event) => {
        setTansaction({
            ...transaction,
            [event.target.name]: event.target.value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        sessionStorage.setItem('transaction', JSON.stringify(transaction))
        setTansaction({
            amount: '',
            description: '',
            date: '',
            type: ''
        })
    }

  return (
    <div>
        <h1>NewTransaction</h1>
    
            <form onSubmit={handleSubmit}> 
                <label>
                    <span>Amount</span>
                    <input type="text" onChange={handleChange} value={transaction.amount} name="amount"/>
                </label>
                <label>
                    <span>Description</span>
                    <input type="text"  onChange={handleChange} value={transaction.description} name="description"/>
                </label>
                <label>
                    <span>Date</span>
                    <input type="date" onChange={handleChange} value={transaction.date} name="date"/>
                </label>
                <label>
                    <span>Type</span>
                    <select onChange={handleChange} value={transaction.type} name="type">
                        <option value="income">Income</option>
                        <option value="outcome" >Outcome</option>
                    </select>
                </label>
                <button type="submit"> 
                    <Link to="/confirm">Confirm</Link>
                </button>
            </form>

    </div>
  )
}

export default NewTransaction
