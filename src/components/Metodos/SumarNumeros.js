import pepe from "../../assets/images/pepe.jpg"
function SumarNumeros(props){
    
    console.log(props);
 
    const sumarNumero = () => {
        var n1 = parseInt(props.Num1);
        var n2 = parseInt(props.Num2)
        var suma = n1+n2;
        console.log("La suma es " + suma)
    }

    var imagesize = {
        width: "150px", height: "150px"
    };
    return (
        <div>
            <h1 style={{color:"blue"}}>Prueba sumar numeros</h1>
            <img src={pepe} style={imagesize} alt="pepe"/>
            <button onClick={()=>sumarNumero()}>Hacer suma</button>
        </div>
    )
}

export default SumarNumeros;