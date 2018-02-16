import React, { Component } from 'react';
import {
  View, StatusBar, Image, Text, StyleSheet
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const detalheContatos = require('../imgs/detalhe_contato.png')

export default class CenaContatos extends Component {
  render() {
    return (
        <View>
            <StatusBar
                //hidden={true}
                backgroundColor = '#CCC'
            />
            <BarraNavegacao voltar navivator={this.props.navivator} />

            <View style={styles.cabecalho}>
                <Image source={detalheContatos} />
                <Text style={styles.txtTitulo}>Contatos</Text>
            </View>

            <View style={styles.detalheContatos}>
                <Text styles={styles.txtContatos}>TEL: (11) 1254-8788</Text>
                <Text styles={styles.txtContatos}>CEL: (00) 0000-0000</Text>
                <Text styles={styles.txtContatos}>E-MAIL: contato@atm.com.br</Text>
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
        color: '#61BD8C',
        marginLeft: 10,
        marginTop: 25
    },
    detalheContatos: {
        marginTop: 20,
        padding: 20
    },
    txtContatos: {
        fontSize: 18
    }
})