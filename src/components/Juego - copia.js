import React from 'react';

export default class Juego extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      pj: props.pj,
      info: "Realiza tu primer ataque."
    }
  }
  
  render() {
    return (
      <div>
        <h1>Datos:</h1>
        <p>{this.state.pj.nombre}, vida: {this.state.pj.vida}</p>
        <br />
        <h1>Historial:</h1>
        <div aria-live="polite">
        <p>{this.state.info}</p>
        </div>
        <br />
        <h1>Ataques</h1>
        {this.state.pj.ataques.map((ataque, index) => <button onClick={(e) => this.atacar(e, ataque)}>{ataque.nombre}</button>)}
      </div>
    );
  }
  
  atacar(e, ataque) {
    e.preventDefault();
    this.setState({ info: ataque.nombre });
  }
}
