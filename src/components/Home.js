import React from 'react';
import { Link } from "react-router-dom";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      pj: props.pj
    }
  }
  
  render() {
    return (
      <div>
        <h1>Bienvenido:</h1>
        <br />
        <p>este es un juego mas.<br />
        <Link to="/select">Iniciar</Link>
        </p>
      </div>
    );
  }
}
