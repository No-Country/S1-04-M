import React from 'react'
import{BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import { Store } from './store/store'
import { Pages } from './pages/pages'


export const App = () => {
  return (
    <Provider store={Store}>
      <BrowserRouter>      
    <Pages/>
    </BrowserRouter>
    </Provider>
  )
}
