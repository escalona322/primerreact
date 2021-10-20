import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import Saludo from './components/Saludo/Saludo';
import Metodos from './components/Metodos/Metodos';
import SumarNumeros from './components/Metodos/SumarNumeros';
import Matematicas from './components/Metodos/Matematicas';
import Padre from './components/Metodos/Padre';
import Contador from './components/Contador/Contador';
import PadreDibujo from './components/PadreDibujo/PadreDibujo';
import Car from './components/Car/Car';

ReactDOM.render(
  <React.StrictMode>
    <Car Marca="Audi" Modelo="R8" 
    Aceleracion="30" VelocidadMaxima="270"/>
    <Car Marca="Toyota" Modelo="Jaris" 
    Aceleracion="15" VelocidadMaxima="180"/>
    <Car Marca="Kia" Modelo="Ceed" 
    Aceleracion="15" VelocidadMaxima="150"/>
    <Car Marca="Renault" Modelo="Duplo" 
    Aceleracion="25" VelocidadMaxima="170"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
