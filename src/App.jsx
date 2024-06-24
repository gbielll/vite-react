import { useState, useEffect } from 'react' //lida com status
//o useEffect possibilita efeitos nas paginas, deve ser chamado no corpo da function
import './App.css'
import Button from './components/Button';
import useTemperature from './hooks/useTemperature';

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


 useEffect(()=>{
   //aqui nessa primeira funcao que vai executar o efeito que for receber na pagina
  //essa função vai modificar atraves do valor que for validao da variável "temperature", atraves da função de baixo com o []
  //visu, crie um arquivo separado com a parte logica da modificação da variável "temperature"
    useTemperature(temperature) //chamando o arquivo useTaemperture e mando o a variável "temperature"
  },
 // na segunda parte que acontecerá a parte de modificação para enviar para a primeira função.
 //nesse exemplo ele recebará um array de variáveis e decorrente aos seus valores que ocorrerá as modificações
 //[]: se for vazio executa o useEffect somente quando o componente for carregado
 //[...]; se tiver valor, executa o useEffect quando o valor da variável dentro do [] for alterada
 // sem paramentro ([]), o useEffect fica em um loop infinito
 [temperature] //como eu tenho uma variável: executa o useEffect quando o valor da variável dentro do [] for alterada
);

  return (
    <div className='main-container'> {/* esse main-container, é que contem o main (o pai dela) que vai estilizado, apesar que tem o h1. Assim ja ajuda a alicar direto no pai e no filho*/}
      <h1>Temperatura</h1>
      <main>
        <h2>{temperature} °C</h2>
        <div className='button-container'>
          <Button onClick={diminuirTemperature}>-</Button>
          <Button onClick={aumentarTemperature}>+</Button>
        </div>
      </main>
    </div>
  )
}

export default App
