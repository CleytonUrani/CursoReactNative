import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default props => (
    <TextInput style={sytles.numero} />
);

const sytles = StyleSheet.create({
    numero: {
        width: 140,
        height: 80,
        fontSize: 20
    }
});
