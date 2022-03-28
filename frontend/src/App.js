import React from 'react'
import{BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import { Store } from './components/store/store'


export const App = () => {
  return (
    <Provider store={Store}>
      <BrowserRouter>      
    <div>App</div>
    </BrowserRouter>
    </Provider>
  )
}
