import React, { useState } from 'react';

function Contador(){

    const [numero, setNumero] = useState(0);

    const sumarContador = () => {
        setNumero(numero + 1);
    }
    

    
    return (

        <React.Fragment>
             <h1>Ejemplo State Reacts</h1>
             <h2 style={{color: 'green'}}>
                 Valor del contador: {numero}
             </h2>
             <button onClick={() => sumarContador()}>
                 Sumar contador
            </button>
            <button onClick={() => { setNumero(numero -1);}}>
                 Restar contador
            </button>
        </React.Fragment>

    );
}

export default Contador;