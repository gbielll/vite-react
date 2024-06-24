import React from 'react' //react e o reactDom é a arvore dos para acessar os comando do react para criação
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//esse render vai rederenzir tudo para criação
//no app vai ser onde vou usar como principal, mas o main que é o principal. apenas para nao ficar bagunçago

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
