import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';
import CenaContatos from './src/components/CenaContatos';

class app5 extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ id: 'a' }}
        renderScene={(route, navigator) =>{
          if (route.id === 'a'){
            return(<CenaPrincipal navigator={navigator} />);
          }
          if (route.id === 'b'){
            return(<CenaClientes navigator={navigator} />);
          }
          if (route.id === 'contato'){
            return(<CenaContatos navigator={navigator} />);
          }
        }}
      />
    );
  }
}

AppRegistry.registerComponent('app5', () => app5);
