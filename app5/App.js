import React, { Component } from 'react';
import {
  AppRegistry, Navigator
} from 'react-native';

import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';

class app5 extends Component {
  render() {
    return (
      <Navigator
        InitialRoute={{id: 'a'}}
        renderScene={(route, navigator) =>{
          if (route.id === 'a'){
            return(<CenaPrincipal />);
          }
          if (route.id === 'b'){
            return(<CenaClientes />);
          }
        }}
      />
    );
  }
}

AppRegistry.registerComponent('app5', () => app5);
