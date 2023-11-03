/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native';
import { imageConstance } from '../helper/imageConstance';
import { setCartProduct, filterListData } from '../redux/actions/productDataAction';
import { useSelector, useDispatch } from 'react-redux';
import cartProducts from './CartProducts';
import { colorConstance } from '../helper/colorConstance';


// create a component
const FullProductDetails = ({navigation,route}) => {
    // console.log(route?.params?.item?.images[0]);

    const dispatch = useDispatch();
    const { filterListData, cartProducts } = useSelector(state => state.productData);

    return (
        <View style={styles.container}>
            <View
                style={{ margin: 0, justifyContent: 'flex-end' }}
                onBackdropPress={() => {

                }}>
                <View style={styles.modal}>
                    <View style={{ alignItems: 'center', flexDirection: 'row',marginTop:18 }}>
                        <TouchableOpacity
                            style={{ marginLeft: 15 }} onPress={() => {
                                // setModal(false);
                                navigation.goBack('');
                            }}>
                            <Image style={{ ...styles.header, marginRight: 10 }} source={imageConstance.arrow} />
                        </TouchableOpacity>
                        <Text
                            numberOfLines={1}
                            style={{ ...styles.categoryName, fontSize: 18, fontWeight: 'bold', color: 'black', flex: 1 }}>{route?.params?.item?.title}</Text>
                        <TouchableOpacity>
                            <Image style={styles.header} source={imageConstance.search} />
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Image style={styles.header} source={imageConstance.threeDot} />
                        </TouchableOpacity>
                    </View>
                    <Image style={styles.productImage} source={{ uri: route?.params?.item?.images[0] }} />
                        <Text style={styles.category}>{route?.params?.item?.category}</Text>
                    <View style={{ paddingLeft: 15 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.mainProductTitle}>{route?.params?.item?.title}</Text>
                            <TouchableOpacity onPress={() => {
                                dispatch(setCartProduct([...cartProducts, route?.params?.item]));
                            }}>
                                <Image style={styles.header} source={cartProducts.some(item => item?.id === route?.params?.item?.id) ? imageConstance.addCart : imageConstance.cart} />
                            </TouchableOpacity>
                        </View>
                        {/* {console.log(userId.item.image)} */}
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Text style={styles.productPrice}>₹{route?.params?.item?.price}</Text>
                            <Text style={styles.off}>{route?.params?.item?.discountPercentage}%off</Text>
                        </View>
                        <Text style={styles.description}>Description</Text>
                        <Text style={styles.descriptionText}>{route?.params?.item?.description}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header:{
        height: 25,
        width: 25,
        marginRight: 15,
    },
    description: {
        marginBottom: 5,
        fontSize: 18,
        fontWeight: '900',
        color: colorConstance.darkBlue,
    },
    productImage:{
        height: 230,
        resizeMode: 'contain',
        marginVertical: 20,
        marginHorizontal:10,
        borderRadius:10,
    },
    categoryName: {
        fontWeight:'bold',
    },
    mainProductTitle:{
        fontWeight:'bold',
        fontSize:20,
        color:colorConstance.black,
    },
    category:{
        fontWeight:'bold',
        fontSize:14,
        color:colorConstance.darkBlue,
        marginLeft:15,
        marginBottom:10,
    },
    productPrice:{
        color:colorConstance.sky,
        fontWeight:'bold',
        fontSize:25,
        marginVertical:16,
    },
    off:{
        color: colorConstance.primaryRed,
        fontWeight: '900',
        marginLeft: 16,
    },
});

//make this component available to the app
export default FullProductDetails;
