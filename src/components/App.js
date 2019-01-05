import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import GastoForm from './GastoForm';

class App extends Component {

  state = {
      presupuesto: '',
      restante: '',
      gastos: {}
  }

  //Agregar nuevo gasto al state
  agregarGasto = gasto => {
      //Tomar una copia del state actual
      const gastos = {...this.state.gastos}

      //agregar el gasto al objeto del state
      gastos[`gasto${Date.now()}`] = gasto;

      //ponerlo en el state
      this.setState({
          gastos
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
                  2
                  </div>
              </div>
          </div>

      </div>
    );
  }
}

export default App;
