import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class MeuComponente extends Component{
  render(){
    return (
      <View>
        <Text>{this.props.p1}</Text>
        <Text>{this.props.p2}</Text>
      </View>
    );
  }
}

class app3 extends Component{
  render(){
    return (
      <MeuComponente p1='Primeiro' p2='Segundo'></MeuComponente>
    );
  }
}

AppRegistry.registerComponent('app3', () => app3);