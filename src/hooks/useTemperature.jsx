import colors from  '../utils/colors.json'

//crio uma variável do arquivo json, onde está as cores, para chamar aqui.

export default function useTemperature(temperature){
    if(temperature<0){
        document.body.style.background = colors.freenzing; //muda a cor de fundo do body, e chamo a cor armazenado no arquivo json atraves da variável criada.oNomedaCor
     }else if(temperature >=0 && temperature<15){
        document.body.style.background = colors.cold;
     }else if(temperature >=15 && temperature<26){
        document.body.style.background = colors.moderate;
     }else if(temperature >=26 && temperature<40){
        document.body.style.background = colors.hot;
     }else{
        document.body.style.background = colors.burnung;
     }
}