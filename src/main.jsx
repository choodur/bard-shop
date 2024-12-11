import React from 'react'
import ReactDOM from 'react-dom/client'
import Agent from 'bardrr'
import './index.css'
import App from './App.jsx'

new Agent().start({
  appName: 'Bard',
  endpoint: 'http://localhost:3001',
  onMessage: (message) => {
    console.log(message)
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
