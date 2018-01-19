import React from 'react';
import { Text, AppRegistry, View } from 'react-native';

const Estilos = {
  estiloTexto: {
    fontSize: 30,
    backgroundColor: 'red'
  }
};

const App = () => {
  return(
    <Text style={Estilos.estiloTexto}>Olá mundo react</Text>
  )
};

AppRegistry.registerComponent('app2', () => App);