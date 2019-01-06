import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import GastoForm from './GastoForm';
import Listado from './Listado';
import ControlPresupuesto from './ControlPresupuesto';
import {validarPresupuesto} from '../helper';

class App extends Component {

  state = {
      presupuesto: '',
      restante: '',
      gastos: {}
  }

  componentDidMount() {
      this.obtenerPresupuesto();
  }

  obtenerPresupuesto = () => {
      let presupuesto = prompt('Cual es el presupuesto?...');

      let resultado = validarPresupuesto(presupuesto);
      if (resultado) {
        //ponerlo en el state
        this.setState({
            presupuesto: presupuesto,
            restante: presupuesto
        })    
      } else {
        this.obtenerPresupuesto();
      }

  }


  //Agregar nuevo gasto al state
  agregarGasto = gasto => {
      //Tomar una copia del state actual
      const gastos = {...this.state.gastos}

      //agregar el gasto al objeto del state
      gastos[`gasto${Date.now()}`] = gasto;

      //Resta presupuesto para saber cuanto llevamos
      this.restarPresupuesto(gasto.cantidad);

      //ponerlo en el state
      this.setState({
          gastos
      })
  }

  restarPresupuesto = cantidad => {
      //Lee la cantidad a restar y lo combierte en numero
      let restar = Number(cantidad);
      //Trae una copia del state
      let restante = this.state.restante;
      //Hace operacion
      restante-=restar;
      //Agrega resultado a state
      this.setState({
        restante
      })
  }

  render() {
    return (
      <div className="App container">

          <Header 
              titulo = "Gasto Semanal"
          />

          <div className="contenido-principal contenido">
              <div className="row">
                  
                  <div className="one-half column">
                      <GastoForm 
                          agregarGasto = {this.agregarGasto}
                      />
                  </div>

                  <div className="one-half column">
                      <Listado 
                          gastos = {this.state.gastos}
                      />

                      <ControlPresupuesto 
                          presupuesto={this.state.presupuesto}
                          restante={this.state.restante}
                      />
                  </div>
              </div>
          </div>

      </div>
    );
  }
}

export default App;
