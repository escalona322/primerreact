function Metodos(){

    var ejemplo = "Esto es un ejemplo";

    const mostrarMensaje = () => {
        console.log("Has pulsado un botón ");
        ejemplo = "He cambiado";
        console.log(ejemplo);
    }

    const dobleNumero = (numero) => {
        var doble = numero * 2;
        console.log(doble)
    }
    return (
        <div>
            {/* {mostrarMensaje()} */}
            <h1>
                Ejemplo de metodos
            </h1>
            <h2 style={{color:"red"}}>{ejemplo}</h2>
            <button onClick={ () => mostrarMensaje()}>
                Pulsa para mensaje
            </button>
            <button onClick={ () => dobleNumero(4)}>
                Pulsa para el doble
            </button>
            
        </div>
    );
         
}
export default Metodos;