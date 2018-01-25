import React from 'react';
import { Text, AppRegistry, View, Image, TouchableOpacity } from 'react-native';

const Estilos = {
  principal: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
};

const botaoPressionado = () => {

};

const App = () => {
  const { principal, botao, textoBotao } = Estilos;

  return(
    <View style={principal}>
      <Text>FRASE DO DIA</Text>
      <TouchableOpacity style={botao}>
          <Text style={textoBotao}>Nova Frase</Text>
      </TouchableOpacity>
    </View>
  )
};

AppRegistry.registerComponent('app2', () => App);