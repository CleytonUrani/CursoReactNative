import React from 'react';
import { Text, AppRegistry, View } from 'react-native';

const Estilos = {
  estiloTexto: {
    fontSize: 20
  }
};

const App = () => {
  return(
    <Text>Olá</Text>
  )
};

AppRegistry.registerComponent('app2', () => App);