import React, {Component} from 'react';

class Gasto extends Component {
	render(){
		const {gasto, cantidad} = this.props.gasto;
		return (
			<li className="gastos">
				<p>
					{gasto}
					<span className="gasto">{cantidad}</span>
				</p>
			</li>
		)
	}
}

export default Gasto;