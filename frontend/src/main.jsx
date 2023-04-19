import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { SubjectContextProvider } from './context/SubjectContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SubjectContextProvider>
    <App />
    </SubjectContextProvider> 
  </React.StrictMode>,
)
