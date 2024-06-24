import './Button.css'
/*a idea de props com Children vai referizar os filhos 
de dentro da tag (a qual estou chamando pra ca). 
la ta assim: <Button> - (o que tiver aqui dentro da tag q sao os filhos e serão rederizados) <Button/>
*/

/*nesse claso do onClick, ele nao é children, pq nao ta entre as tag, ta dentro*/
/*nesse caso o onClick ta recebendo n um valor e sim uma função*/

export default function Button({onClick,children}){
    return <button onClick={onClick}>{children}</button>
}