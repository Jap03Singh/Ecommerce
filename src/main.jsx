import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, createBrowserRouter} from 'react-router-dom'
import ShopContextProvider from './context/ShopContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <createBrowserRouter>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </createBrowserRouter>,
)
