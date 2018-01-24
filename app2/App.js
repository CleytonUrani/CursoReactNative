import React from 'react';
import { Text, AppRegistry, View } from 'react-native';

const Estilos = {
  estiloTexto: {
    fontSize: 30,
    backgroundColor: 'red',
    paddingTop: 15,
    color: '#fff',
    textAlign: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 0,
      height: 2
    }
  }
};

const App = () => {
  const { estiloTexto } = Estilos;

  return(
    <View>
      <Text style={estiloTexto}>Frases do Dia</Text>
    </View>
  )
};

AppRegistry.registerComponent('app2', () => App);