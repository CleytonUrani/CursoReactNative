import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Principal from './src/components/Principal';
import SobreJogo from './src/components/SobreJogo';
import OutrosJogos from './src/components/OutrosJogos';

export default class app6 extends Component {
  render() {
    return (
      <Router>
        <Scene key='principal' Component={Principal} initil title='Cara ou Coroa' />
        <Scene key='sobreJogo' Component={SobreJogo} />
        <Scene key='outrosJogos' Component={OutrosJogos} />
      </Router>
    );
  }
}
