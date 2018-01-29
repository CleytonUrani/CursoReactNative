import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

class app3 extends Component{
  constructor(props){
    super(props);

    this.state = { escolhaUsuario: '', escolhaComputador: ''};
  }

  jokenpo(escolhaUsuario){
    var numAleatorio = Math.floor(Math.random() *3);
    var escolhaComputador = '';

    switch(numAleatorio){
      case 0: escolhaComputador = 'pedra'; break;
      case 1: escolhaComputador = 'papel'; break;
      case 2: escolhaComputador = 'tesoura'; break;
    }

    var resultado = '';

    if(escolhaComputador == 'pedra'){
      if(escolhaUsuario == 'pedra'){
        resultado = 'Empate';
      }
      if(escolhaUsuario == 'tesoura')
      {
        resultado = 'Perdeu';
      }
      if(escolhaUsuario == 'papel')
      {
        resultado = 'Ganhou';
      }
    }

    if(escolhaComputador == 'papel'){
      if(escolhaUsuario == 'papel')
      {
        resultado = 'Empate';
      }
      if(escolhaUsuario == 'pedra')
      {
        resultado = 'Perdeu';
      }
      if(escolhaUsuario == 'tesoura')
      {
        resultado = 'Ganhou';
      }
    }

    if(escolhaComputador == 'tesoura'){
      if(escolhaUsuario == 'tesoura')
      {
        resultado = 'Empate';
      }
      if(escolhaUsuario == 'papel')
      {
        resultado = 'Perdeu';
      }
      if(escolhaUsuario == 'pedra')
      {
        resultado = 'Ganhou';
      }
    }

    this.setState({ 
      escolhaUsuario : escolhaUsuario,
      escolhaComputador : escolhaComputador,
      resultado: resultado
    });
  }

  render(){
    return (
      <View>
        <Text>Escolha do Computador: {this.state.escolhaComputador}</Text>
        <Text>Escolha do Usuário: {this.state.escolhaUsuario}</Text>
        <Text>Resultado: {this.state.resultado}</Text>
        <Button title='pedra' onPress={() => {this.jokenpo('pedra')}}/>
        <Button title='papel' onPress={() => {this.jokenpo('papel')}}/>
        <Button title='tesoura' onPress={() => {this.jokenpo('tesoura')}}/>
      </View>
    );
  }
}

AppRegistry.registerComponent('app3', () => app3);