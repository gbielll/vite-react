import { useState } from 'react' //lida com status
import './App.css'

function App() {
  const [temperature, setTemperature] = useState(5); //esse 0 é o valor padrão que vai pro Temperature com o useState(que ele insira os valores)

  function diminuirTemperature(){
    //com o set que vou modificar realmente a variável temperature. Com o conceito de multabilidade do react. 
    setTemperature(temperature-1);
  }

  function aumentarTemperature(){
    //com o set que vou modificar realmente a variável temperature. Com o conceito de multabilidade do react. 
    setTemperature(temperature+1);
  }


  return (
    <div className='main-container'> {/* esse main-container, é que contem o main (o pai dela) que vai estilizado, apesar que tem o h1. Assim ja ajuda a alicar direto no pai e no filho*/}
      <h1>Temperatura</h1>
      <main>
        <h2>{temperature} °C</h2>
        <div className='button-container'>
          <button onClick={diminuirTemperature}>-</button>
          <button onClick={aumentarTemperature}>+</button>
        </div>
      </main>
    </div>
  )
}

export default App
