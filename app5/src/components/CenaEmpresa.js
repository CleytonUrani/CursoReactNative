import React, { Component } from 'react';
import {
  View, StatusBar, Image, Text, StyleSheet
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const detalheEmpresa = require('../imgs/detalhe_empresa.png')

export default class CenaEmpresa extends Component {
  render() {
    return (
        <View>
            <StatusBar
                //hidden={true}
                backgroundColor = '#CCC'
            />
            <BarraNavegacao voltar navigator={this.props.navigator} />

            <View style={styles.cabecalho}>
                <Image source={detalheEmpresa} />
                <Text style={styles.txtTitulo}>A Empresa</Text>
            </View>

            <View style={styles.detalheEmpresa}>
                <Text style={styles.txtEmpresa}>A ATM Consultoria está no mercado....</Text>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    cabecalho: {
        flexDirection: 'row',
        marginTop: 20
    },
    txtTitulo: {
        fontSize: 30,
        color: '#EC7148',
        marginLeft: 10,
        marginTop: 25
    },
    detalheEmpresa: {
        marginTop: 20,
        padding: 20
    },
    txtEmpresa: {
        fontSize: 18
    }
})