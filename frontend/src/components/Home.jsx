import React from 'react'

export const Home = () => {
  return (
    <div>
        <h1>Login</h1>
        <form>
            <label>
                Card number:
                <input type="text" name="tarjet" />
            </label>
            <label>
                Password:
                <input type="password" name="password" />
            </label>
            <input type="submit" value="Submit" />
        </form>


    </div>
  )
}
