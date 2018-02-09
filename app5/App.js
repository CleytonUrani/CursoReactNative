import React, { Component } from 'react';
import {
  AppRegistry, StatusBar
} from 'react-native';

import BarraNavegacao from './src/components/BarraNavegacao';

class app5 extends Component {
  render() {
    return (
      <View>
        <StatusBar
          //hidden={true}
          backgroundColor = '#CCC'
        />
        <BarraNavegacao />
      </View>
    );
  }
}

AppRegistry.registerComponent('app5', () => app5);
