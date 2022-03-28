import React from 'react'

export const Transactions = () => {
  return (
    <div>
        <h1>Transactions</h1>
        <form>
            <label>
                Select Card:
                <select>
                    <option value="1">Card 1</option>
                    <option value="2">Card 2</option>
                    <option value="3">Card 3</option>
                </select>
            </label>
            <input type="submit" value="Submit" />

        <label>
            Select Date:
            <input type="date" name="date" />
        </label>

        <label>
            Fate Card:
            <select>
                <option value="1">Card 1</option>
                <option value="2">Card 2</option>
                <option value="3">Card 3</option>
            </select>
        </label>

        <label>
            Amount:
            <input type="number" name="amount" min={0} />
        </label>

        <label>
            Description:
            <input type="text" name="description" />
        </label>

        <input type="submit" value="Submit" />


        </form>
    </div>
  )
}
