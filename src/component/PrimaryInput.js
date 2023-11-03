/* eslint-disable prettier/prettier */
//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import { imageConstance } from '../helper/imageConstance';
import { colorConstance } from '../helper/colorConstance';

// create a component
const PrimaryInput = ({ secureTextEntry, suffixIcon, value, onChangeText, placeHolder, onPress, style, prefix, prefixOnPress }) => {


    return (
        <View style={styles.container}>
            {/* {!isPlaceholder && <Text style={styles.placeHolder}>{placeHolder}</Text>} */}
            <View style={{
                ...styles.mainTextInput,
                borderWidth: 1, borderColor: value.length > 0 ? colorConstance.sky : 'lightgrey'
            }}>
                {prefix &&
                    <TouchableOpacity onPress={prefixOnPress}>
                        <Image style={styles.prefixImage} source={prefix} />
                    </TouchableOpacity>}
                <TextInput
                    style={[styles.text, style]}
                    value={value}
                    onChangeText={onChangeText}
                    placeholder={placeHolder}
                    secureTextEntry={secureTextEntry}
                />
                {suffixIcon &&
                    <TouchableOpacity onPress={onPress}>
                        <Image style={styles.suffixImage} source={suffixIcon} />
                    </TouchableOpacity>}
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex:1,
    },
    placeHolder: {
        color: 'black',
        fontSize: 20,
        marginLeft: 25,
        marginVertical: 10,
    },
    mainTextInput: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colorConstance.white,
        borderRadius: 5,
        marginHorizontal: 25,
        paddingHorizontal: 15,
        marginTop: 10,
        borderWidth: 1,
        // borderColor:colorConstance.lightGrey,
    },
    text: {
        flex: 1,
        marginRight: 10,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        color: colorConstance.lightGrey,
    },
    prefixImage: {
        height: 20,
        width: 20,
        tintColor: colorConstance.lightGrey,
    },
    suffixImage: {
        height: 15,
        width: 15,
    },

});

//make this component available to the app
export default PrimaryInput;
