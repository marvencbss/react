import React from 'react'
import ReactDOM from 'react-dom/client'
import App, { Introducao } from './App.jsx'

const rootHTML = document.querySelector('#root')
const rootReact = ReactDOM.createRoot(rootHTML);
const componente = (
  <>
  <h1>oi</h1>
  <Introducao />
  <App />

  <hr>
  </hr>
  <h2>Abaixo tem um componente react</h2>
<App />

</>
)

rootReact.render(componente)
