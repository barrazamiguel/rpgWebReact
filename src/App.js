import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import SeleccionarPersonaje from './components/SeleccionarPersonaje';
import Juego from './components/Juego';

export default class App extends Component {
  render() {
    return (
      <HashRouter>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/select" component={SeleccionarPersonaje} exact/>
        <Route path="/game" component={Juego} exact/>
      </Switch>
      </HashRouter>
    );
  }
}
