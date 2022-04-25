import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from "react"
import {AuthContextProvider} from "./Contexts/AuthContexts";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
)
