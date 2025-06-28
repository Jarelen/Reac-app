// import { StrictMode } from 'react' <-- Este sí lo usamos pero para la primera parte del ejercicio antes del react
import { createRoot } from 'react-dom/client'
{/*import './index.css'*/}
import {BrowserRouter}from 'react-router-dom'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  //<StrictMode> se usó en la primera parte del código
  <BrowserRouter>
    <App />
  </BrowserRouter>
  //</StrictMode>, funciona unicamente con elcomentado arriba
  
)
