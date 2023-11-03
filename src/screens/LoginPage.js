/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity, Image, StatusBar } from 'react-native';
import PrimaryInput from '../component/PrimaryInput';
import Button from '../component/Button';
import { imageConstance } from '../helper/imageConstance';
import { colorConstance } from '../helper/colorConstance';
// import FigmaHeader from '../component/FigmaHeader';


// create a component
const LoginPage = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={colorConstance.white}  />
            <PrimaryInput
                prefix={imageConstance.mail}
                placeHolder={'Email'}
                value={email}
                onChangeText={setEmail}
            />
            <PrimaryInput
                prefix={imageConstance.lock}
                placeHolder={'Password'}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />
            <Button
                text={'Sign In'}
                onPress={() => {
                    const emailReg = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
                    const passwordReg = new RegExp(
                        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/,
                    );
                    if (!emailReg.test(email)) {
                        Alert.alert('enter valid email');
                    } else if (!passwordReg.test(password)) {
                        Alert.alert('enter valid password' );
                    } else {
                        if (emailReg.test(email) && passwordReg.test(password) ) {
                            Alert.alert('Login successful');
                            navigation.navigate('HomePage');
                        } else {
                            Alert.alert('Login Failed');
                        }
                    }

                }}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 12 }}>
                <View style={styles.blankView} />
                <Text>OR</Text>
                <View style={styles.blankView} />
            </View>
            <TouchableOpacity>
                <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    flexDirection: 'row', alignItems: 'center',marginTop: 10,justifyContent:'center'}}
             onPress={() => {
                navigation.navigate('SignUp');
            }}>
            <Text>Don't have a account? </Text>
                <Text style={styles.bottomSignIn}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        paddingTop:50,
        flex:1,
        backgroundColor: colorConstance.white,
    },
    signIn: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    bottomSignIn: {
        alignSelf: 'center',
        fontSize: 14,
        fontWeight:'bold',
        color:colorConstance.sky,
    },
    blankView:{
        flex:1,
        height:1,
        backgroundColor:colorConstance.lightGrey,
        marginHorizontal:20,
    },
    googleMain:{
        flexDirection:'row',
        borderWidth:1,
        borderColor:colorConstance.lightGrey,
        paddingVertical:16,
        marginHorizontal:20,
        borderRadius:5,
        paddingHorizontal:10,
        alignItems:'center',
        marginBottom:12,
    },
    image:{
        height:15,
        width:15,
    },
    google:{
        alignSelf:'center',
    },
    facebookMain:{
        borderColor: colorConstance.lightGrey,
        borderWidth: 1,
        paddingVertical: 16,
        marginHorizontal: 20,
        borderRadius: 5,
        paddingHorizontal: 10,
        alignItems: 'center',
        flexDirection:'row',
    },
    facebook:{
        alignSelf:'center',

    },
    forgot:{
        alignSelf:'center',
        color:colorConstance.sky,
        marginTop:16,
        fontSize:13,
        fontWeight:'bold',
    }
});

//make this component available to the app
export default LoginPage;
