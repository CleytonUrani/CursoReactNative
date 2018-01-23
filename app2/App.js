import React from 'react';
import { Text, AppRegistry, View } from 'react-native';

const Estilos = {
  estiloTexto: {
    fontSize: 30,
    backgroundColor: 'red',
    margin: 30,
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowOffset: {
      width: 10,
      height: 15
    }
  }
};

const App = () => {
  return(
    <Text style={Estilos.estiloTexto}>Frases do Dia</Text>
  )
};

AppRegistry.registerComponent('app2', () => App);