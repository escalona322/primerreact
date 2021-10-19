function Matematicas(props){

    const duplicarNum = () => {
        var n1 = props.num1;
       
        var doble = n1*2;

        console.log("El doble de "+n1+" es "+doble);
    }

    var matesPadre = props.triplicarPadre;

    return(
        <div>
            <h1>Soy el numero {props.num1}</h1>
            <button onClick={()=> duplicarNum()}>Duplicar</button>
            <button onClick={() => matesPadre(props.num1)}>Triplicar</button>
        </div>
    )
}

export default Matematicas