import React from 'react'
/* import {useDispatch} from 'react-redux'
import { Transactions } from './Transactions' */
import { useNavigate } from 'react-router-dom'

const NewTransaction = () => {
const navigate = useNavigate()

/* const dispatch c= useDispatch() */

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
            count: '',
            amount: '',
            description: '',
            date: '',
            type: ''

        })
        navigate('/confirm')        
    }

  return (
    <div>
      <h1>NewTransaction</h1>

      <form onSubmit={handleSubmit}>
      
        <label>
          <span>Count</span>
          <input
            type="tel"
            inputMode="numeric"
            pattern="[0-9\s]{13,16}"
            maxLength="16"
            name="count"
            value={transaction.count}
            onChange={handleChange}
            placeholder="Número de tarjeta"
          />
        </label>
        <label>
          <span>Amount</span>
          <input
            type="text"
            onChange={handleChange}
            value={transaction.amount}
            name="amount"
          />
        </label>
        <label>
          <span>Description</span>
          <input
            type="text"
            onChange={handleChange}
            value={transaction.description}
            name="description"
          />
        </label>
        <label>
          <span>Date</span>
          <input
            type="date"
            onChange={handleChange}
            value={transaction.date}
            name="date"
          />
        </label>
        <label>
          <span>Type</span>
          <select onChange={handleChange} value={transaction.type} name="type">
            <option value="income">Income</option>
            <option value="outcome">Outcome</option>
          </select>
        </label>
        <button type="submit">Confirm</button>
      </form>
    </div>
  );
}

export default NewTransaction
