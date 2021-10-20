import { computeHeadingLevel } from '@testing-library/dom';
import React, {useState} from 'react';


function Car(props){

    var coche = {
        Marca: props.Marca,
        Modelo: props.Modelo,
        Aceleracion: props.Aceleracion,
        VelocidadMaxima: props.VelocidadMaxima
    }

    const[ estado, setEstado ] = useState(false);

    const [ velocidad, setVelocidad ] = useState(0);

    const comprobarEstado = () =>{
        if(estado == true){
            return(
                <span style={{color:"greenyellow"}}>Arrancado</span>
            )
        }else{
            return(
                <span style={{color:"darkred"}}>Parado</span>
            )
        }        
    }
    const cambiarEstado = () => {
        if(estado==true){
            setEstado(false);
            setVelocidad(0);
        }else{
            setEstado(true);
        }
    }
    
    const acelerar = () => {
        if(estado==true){
            if(velocidad>= coche.VelocidadMaxima){
                setVelocidad(coche.VelocidadMaxima);
            }else{
                setVelocidad(parseInt(velocidad)+parseInt(coche.Aceleracion));
            }
        }else{
            alert("El coche esta parado");
            setVelocidad(0);
        }        
    }
    const decelerar = () => {
        if(estado==true){
            if(velocidad<= 0){
                setVelocidad(0);
            }else{
                setVelocidad(velocidad-coche.Aceleracion);
            }
        }        
    }
    return (
        <div>
            <hr/>
            <h1 style={{color:"fuchsia"}}>
                Marca: {coche.Marca},
                Modelo: {coche.Modelo}
            </h1>
            <h2>El coche esta... {comprobarEstado()}</h2>
            <h2 style={{color:"blue"}}>
                Velocidad actual: {velocidad} km/h
            </h2>
            {/* <button onClick={() => setEstado(!estado)}>Arrancar/Detener</button>
             Dejo este comentario por el setEstado(!estado), cambia el valor de estado*/}
            <button onClick={() => cambiarEstado()}>Arrancar/Detener</button>
            <button onClick={() => acelerar()}>Acelerar</button>
            <button onClick={() => decelerar()}>Decelerar</button>
        </div>
    )
}

export default Car;