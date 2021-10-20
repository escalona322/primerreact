import MatematicasDibujo from "../MatematicasDibujo/MatematicasDibujo";
import React, { useState } from 'react';
function PadreDibujo(){

    const [multidibujo, setmultidibujo] = useState(0);
        
   
    const multiplicarDibujo = (num1dibujo, num2dibujo) => {
       
        var multi = num1dibujo* num2dibujo;
        
        setmultidibujo(num1dibujo*num2dibujo);
       
    }

    return (
        <React.Fragment>
            <h1 style={{color:"green"}}>La multiplicacion es: {multidibujo}</h1>
            <MatematicasDibujo num1="9" num2="54" multiplicarDibujo={multiplicarDibujo}/>
            <MatematicasDibujo num1="6" num2="12" multiplicarDibujo={multiplicarDibujo}/>           
            <MatematicasDibujo num1="5" num2="2" multiplicarDibujo={multiplicarDibujo}/>          
            <MatematicasDibujo num1="7" num2="5" multiplicarDibujo={multiplicarDibujo}/>           
        </React.Fragment>
    )
}

export default PadreDibujo