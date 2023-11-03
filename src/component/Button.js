/* eslint-disable prettier/prettier */
//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colorConstance } from '../helper/colorConstance';

// create a component
const Button = ({ text, onPress }) => {
    return (
        <TouchableOpacity style={styles.TouchableOpacityButton} onPress={onPress}>
            <Text style={styles.btn}>{text}</Text>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    TouchableOpacityButton: {
        backgroundColor: colorConstance.sky,
        paddingVertical: 15,
        borderRadius: 5,
        width: '90%',
        alignSelf: 'center',
        marginTop: 30,
    },
    btn: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
//make this component available to the app
export default Button;
