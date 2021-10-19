//import logo from './logo.svg';
import './App.css';
import Saludo from './../Saludo/Saludo'
function App() {

  const metodoPadre = (descripcion) => {
    console.log("Ejecutando metodo del Parent "+descripcion);
  }
  return (
    <div className="App">
      <Saludo nombre="Sandra" edad="22" metodoPadre={metodoPadre}/>
      <Saludo nombre="Adrian" edad="24" metodoPadre={metodoPadre}/>
    </div>
  );
}

export default App;
