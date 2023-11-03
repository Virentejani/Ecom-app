/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
//import liraries
import React, { } from 'react';
import { View, Text, StatusBar, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { imageConstance } from '../helper/imageConstance';
import { colorConstance } from '../helper/colorConstance';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct } from '../redux/actions/productDataAction';


// create a component
const CartProducts = ({ navigation }) => {

    const { cartProducts } = useSelector(state => state.productData);

    const dispatch = useDispatch();
    // console.log(productData.productList);

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={colorConstance.white} />
            <View>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => {
                        navigation.goBack();
                    }}>
                        <Image style={styles.arrow} source={imageConstance.arrow} />
                    </TouchableOpacity>
                    <Text style={styles.favorite}>Cart</Text>
                </View>
                <View style={styles.hr} />
            </View>
            <View style={styles.mainView}>
                <FlatList
                    data={cartProducts}
                    numColumns={2}
                    renderItem={({ item }) => {
                        // console.log(item);
                        return (
                            <View style={{ padding: 20 }}>
                                <View style={styles.imageBackground}>
                                    <Image source={{ uri: item.images[0] }}
                                        style={styles.imageStyle}
                                        resizeMode="contain"
                                    />
                                    <Text style={styles.productTitle}>{item.title}</Text>
                                    <Text style={styles.productPrice}>₹{item.price}</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={styles.cross}>₹434</Text>
                                            <Text style={styles.off}>24% off</Text>
                                        </View>
                                        <TouchableOpacity onPress={() => {
                                            const remove = cartProducts.filter(a => a.id !== item.id,
                                            );
                                            dispatch(deleteProduct(remove));
                                        }}>
                                            <Image style={styles.bin} source={imageConstance.bin} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        );
                    }} />
            </View>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Success');
            }}
                style={styles.submit}>
                <Text style={styles.checkout}>Check Out</Text>
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorConstance.white,
    },
    header: {
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center',
    },
    arrow: {
        height: 20,
        width: 20,
        marginRight: 15,
    },
    favorite: {
        fontSize: 16,
        color: colorConstance.black,
        fontWeight: '900',
    },
    hr: {
        marginTop: 15,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: colorConstance.backgroundGrey,
    },
    mainView: {
        flex: 1,
    },
    imageBackground: {
        backgroundColor: 'white',
        width: 160,
        borderRadius: 10,
        shadowColor: 'black',
        shadowRadius: 5,
        shadowOpacity: 1,
        elevation: 10,
    },
    imageStyle: {
        marginVertical: 10,
        alignSelf: 'center',
        height: 100,
        width: 100,
    },
    productTitle: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
        paddingHorizontal: 20,
    },
    star: {
        height: 15,
        width: 15,
        tintColor: '#FFC833',
        marginRight: 2,
    },
    productPrice: {
        fontWeight: '900',
        fontSize: 17,
        marginTop: 10,
        marginLeft: 20,
        color: colorConstance.sky,
    },
    cross: {
        textDecorationLine: 'line-through',
        color: colorConstance.lightGrey,
        marginLeft: 10,
    },
    off: {
        color: colorConstance.primaryRed,
        fontWeight: '900',
        marginLeft: 10,
    },
    bin: {
        height: 20,
        width: 20,
        tintColor: colorConstance.lightGrey,
    },
    checkout: {
        paddingVertical: 10,
        backgroundColor: colorConstance.sky,
        color: colorConstance.white,
        alignSelf: 'center',
        fontWeight: '900',
        fontSize: 25,
        marginBottom: 20,
        paddingHorizontal: 130,
        borderRadius: 5,
    },
});

//make this component available to the app
export default CartProducts;
