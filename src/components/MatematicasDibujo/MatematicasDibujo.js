import React, { useState } from 'react';

function MatematicasDibujo(props){

    const [num1dibujo, setnum1dibujo] = useState(parseInt(props.num1));
    const [num2dibujo, setnum2dibujo] = useState(parseInt(props.num2));
    const [sumadibujo, setsumadibujo] = useState(0);
    const sumarDibujo = () => {
       
        setsumadibujo(num1dibujo + num2dibujo);
    }

    var multiPadre = props.multiplicarDibujo;
    return (
        <React.Fragment>
            <h1>Estos son los numeros: 
                {num1dibujo} y {num2dibujo}</h1>
            <h2>La suma es: {sumadibujo}</h2>
            <button onClick={()=> sumarDibujo()}>Sumar numeros</button>
            <button onClick={()=> multiPadre(num1dibujo,num2dibujo)}>Multiplicar Numeros</button>
        </React.Fragment>
    )
}

export default MatematicasDibujo