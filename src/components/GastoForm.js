import React, {Component} from 'react';
import PropTypes from 'prop-types';

class GastoForm extends Component {

	//Refs para los campos del formulario
	gastoRef = React.createRef();
	cantidadRef = React.createRef();

	crearGasto = (e) => {
		//Prevenir el envio del formulario
		e.preventDefault();

		//Crear el objeto
		const gasto = {
			gasto: this.gastoRef.current.value,
			cantidad: this.cantidadRef.current.value
		}

		//Enviar por props
		this.props.agregarGasto(gasto);

		//Resetear formulario
		e.currentTarget.reset();


	}
	render() {
		return (
			<form onSubmit={this.crearGasto}>
			    <h2>Agrega tus gastos aqui</h2>
			    <div className="campo">
			        <label>Nombre Gasto</label>
			        <input className="u-full-width" type="text" placeholder="Ej. Transporte" ref={this.gastoRef}/>
			    </div>

			    <div className="campo">
			        <label>Cantidad</label>
			        <input className="u-full-width" type="text" placeholder="Ej. 300" ref={this.cantidadRef}/>
			    </div>

			    <input className="button-primary u-full-width" type="submit" value="Agregar" />
			</form>
		)
	}
}

GastoForm.propTypes = {
    agregarGasto: PropTypes.func.isRequired
}

export default GastoForm;