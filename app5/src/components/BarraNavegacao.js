import React, { Component } from 'react';
import {
  Text, StyleSheet, View
} from 'react-native';


export default class app5 extends Component {
  render() {
    return (
        <View style={styles.barraTitulo}>
            <Text>ATM Consultoria</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    barraTitulo: {
        backgroundColor: '#CCC',
        padding: 10,
        height: 60
    }
});