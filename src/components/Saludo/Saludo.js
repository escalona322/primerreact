import './../App/App'
function Saludo(props){
    var dato = 'Mañana es martes';
    //var nombre = props.nombre;
    //var edad = props.edad;
    var metodo = props.metodoPadre;
    const {nombre, edad, metodoPadre} = props;
    return (<div>
        <button onClick={() =>metodo(
            nombre + " " + edad
        )}> Boton metodo</button>
        <h1> Prueba saludo, {nombre} </h1>
        <h2>{dato} {edad}</h2>
    </div>);
}

export default Saludo;