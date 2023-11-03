/* eslint-disable prettier/prettier */

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './screens/LoginPage';
import HomePage from './screens/HomePage';
import CartProducts from './screens/CartProducts';
import FullProductDetails from './screens/FullProductDetails';
import Success from './screens/Success';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}
                initialRouteName="LoginPage">
                <Stack.Screen name="LoginPage" component={LoginPage} />
                <Stack.Screen name="HomePage" component={HomePage} />
                <Stack.Screen name="CartProducts" component={CartProducts} />
                <Stack.Screen name="FullProductDetails" component={FullProductDetails} />
                <Stack.Screen name="Success" component={Success} />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
