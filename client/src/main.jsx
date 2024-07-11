import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import second from '@mui/icons-material'
import { CssBaseline } from '@mui/material'
import {Helmetprovider} from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Helmetprovider>
    <CssBaseline/>
    <App />
    </Helmetprovider>
  </React.StrictMode>,
)
