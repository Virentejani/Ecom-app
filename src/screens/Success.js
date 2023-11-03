/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
//import liraries
import React, { Component } from 'react';
import { View, TouchableOpacity, StatusBar, Text, StyleSheet, Image } from 'react-native';
import { imageConstance } from '../helper/imageConstance';
import { colorConstance } from '../helper/colorConstance';

// create a component
const Success = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={colorConstance.white} />
            <View style={{ padding: 28, backgroundColor: colorConstance.sky, borderRadius: 50 }}>
                <Image style={styles.success} source={imageConstance.success} />
            </View>
            <Text style={styles.name}>Success</Text>
            <Text style={styles.thank}>thank you for shopping using lafyuu</Text>
            <TouchableOpacity style={styles.button} onPress={() => {
                navigation.navigate('HomePage');
            }}>
                <Text style={styles.order}>Back To Order</Text>
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colorConstance.white,
    },
    success: {
        height: 40,
        width: 40,
        tintColor: colorConstance.white,
    },
    name: {
        marginTop: 15,
        fontSize: 30,
        fontWeight: '900',
        color: '#223263',
    },
    thank: {
        marginVertical: 10,
    },
    button: {
        marginTop: 5,
    },
    order: {
        fontSize: 15,
        paddingHorizontal: 145,
        borderRadius: 5,
        fontWeight: '900',
        color: colorConstance.white,
        paddingVertical: 20,
        backgroundColor: '#40BFFF',
    },
});

//make this component available to the app
export default Success;
