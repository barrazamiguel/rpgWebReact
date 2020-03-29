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
      <form onSubmit={this.seleccionar}>
        <p>Seleccione con que personaje desea jugar:</p>
        <p><select onChange={this.datosPj}>
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
    this.setState({ pj: this.pjs[e.target.value] })
  }
}
