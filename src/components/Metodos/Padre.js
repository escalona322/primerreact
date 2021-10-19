import Matematicas from './Matematicas';

function Padre(){

    const triplicarPadre = (num1) => {
        var triple = num1*3;

        console.log("El triple de "+num1+" es "+triple);
    }



    return (
        <div>
            <Matematicas num1="5" triplicarPadre={triplicarPadre}/>
            <Matematicas num1="2" triplicarPadre={triplicarPadre}/>
            <Matematicas num1="6" triplicarPadre={triplicarPadre}/>
            <Matematicas num1="9" triplicarPadre={triplicarPadre}/>
            <Matematicas num1="3" triplicarPadre={triplicarPadre}/>
        </div>
    )
}

export default Padre