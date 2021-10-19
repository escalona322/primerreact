function Saludo(props){
    var dato = 'Mañana es martes';
    //var nombre = props.nombre;
    //var edad = props.edad;
    
    const {nombre, edad} = props;
    return (<div>
        <h1> Prueba saludo, {nombre} </h1>
        <h2>{dato} {edad}</h2>
    </div>);
}

export default Saludo;