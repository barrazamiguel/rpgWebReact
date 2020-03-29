import React from 'react';
import {PJS} from '../datos';

export default class SeleccionarPersonaje extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      pj: PJS[0]
    }
  }
  
  render() {
    return (
      <div>
      <form onSubmit={this.seleccionar.bind(this)}>
        <p>Seleccione con que personaje desea jugar:</p>
        <p><select onChange={this.datosPj.bind(this)}>
        {PJS.map((pj, index) => <option value={index}>{pj.nombre}</option>)}
        </select></p>
        <div aria-live="polite">
          <p><h1>Datos de {this.state.pj.nombre}:</h1>
          puntos de vida: {this.state.pj.vida}.</p>
        </div>
        <p><input type="submit" value="seleccionar" /></p>
      </form>
      </div>
    );
  }
  
  datosPj(e) {
    this.setState({ pj: PJS[e.target.value] });
  }
  
  seleccionar(e) {
    e.preventDefault();
    this.props.history.push({
      pathname: '/game',
      state: { pj: this.state.pj }
    })
    }

}
