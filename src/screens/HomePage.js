/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

//import liraries
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, TextInput, RefreshControl } from 'react-native';
import { makeAPIRequest } from '../helper/globalFunction';
import { useSelector, useDispatch } from 'react-redux';
import { filterList, productList } from '../redux/actions/productDataAction';
import { colorConstance } from '../helper/colorConstance';
import { imageConstance } from '../helper/imageConstance';

// create a component
const HomePage = ({navigation}) => {

    const dispatch = useDispatch();
    const productData = useSelector(state => state.productData);
    const { filterListData, cartProducts } = useSelector(state => state.productData);
    const [search, setSearch] = useState('');
    // console.log(productData?.productList);

    const refresh = () => window.location.reload(true);
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);


    useEffect(() => {
        makeAPIRequest({ method: 'get', baseURL: 'https://dummyjson.com/products/' })
        .then((response) => {
            // console.log(response.data);
            dispatch(productList(response.data.products));
            }).catch((error) => {
                // console.log('error', error);
            });
    });

    return (
        <View style={styles.container}>
            <View style={styles.mainSearch}>
                <View style={styles.search}>
                    <Image style={styles.iconSearch} source={imageConstance.search} />
                    <TextInput style={styles.textInput}
                        value={search}
                        placeholder="search Product"
                        onChangeText={(text) => {
                            setSearch(text);
                            const filterData = productData.productList.filter((item) => {
                                if (item?.category?.includes(text.toLowerCase())) {
                                    return item;
                                }
                            });
                            dispatch(filterList(filterData));
                        }}
                    />
                </View>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('CartProducts');
                }}>
                    <Image style={{ ...styles.cartBell, marginRight: 20 }} source={imageConstance.cart} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                }}>
                    <Image style={{ ...styles.cartBell, marginRight: 20 }} source={imageConstance.notification} />
                    <View style={styles.redDot} />
                </TouchableOpacity>
                <TouchableOpacity  onClick={refresh}>
                    <Image style={{ ...styles.cartBell, marginRight: 20 }} source={imageConstance.refresh} />
                </TouchableOpacity>
            </View>
            <FlatList
                data={filterListData.length > 0 || search ? filterListData : productData?.productList}
                style={styles.flatList}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                renderItem={(item) => {
                    return (
                        <View style={styles.allProducts}>
                            <TouchableOpacity style={styles.productBackground}
                                onPress={() => {
                                    // setProduct(item);
                                    navigation.navigate('FullProductDetails',item);
                                }}
                            >
                                <Image style={styles.productImage} source={{ uri: item.item.images[0] }} />
                                <View style={styles.productDetails}>
                                    <Text
                                        numberOfLines={1}
                                        style={styles.productName}>{item.item.title}</Text>
                                    <View style={{flexDirection:'row',alignItems:'center'}}>
                                        <Text style={styles.money}>₹{item.item.price}</Text>
                                        <Text style={styles.off}>{item.item.discountPercentage} %off</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    );
                }}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    allProducts: {
        borderRadius: 10,
        marginBottom: 16,
        marginHorizontal:10,
    },
    mainSearch: {
        marginVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    search: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        paddingHorizontal: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: colorConstance.lightGrey,
    },
    iconSearch: {
        tintColor: colorConstance.sky,
        height: 17,
        width: 17,
    },
    textInput: {
        paddingHorizontal: 10,
        color: colorConstance.lightGrey,
    },
    cartBell: {
        height: 20,
        width: 20,
        tintColor: colorConstance.lightGrey,
    },
    redDot: {
        height: 7,
        width: 7,
        position: 'absolute',
        right: 22,
        borderRadius: 50,
        backgroundColor: 'red',
    },
    productBackground: {
        width: 180,
        borderWidth: 1,
        borderRadius: 5,
        padding: 18,
    },
    productImage: {
        alignSelf: 'center',
        height: 120,
        width: '90%',
        borderRadius: 5,
        resizeMode: 'contain',
    },
    productImageBackground: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    productDetails: {
        marginTop: 20,
    },
    productName: {
        fontSize: 15,
        fontWeight: '900',
        color: colorConstance.darkBlue,
    },
    money: {
        color: colorConstance.sky,
        fontWeight: '900',
        marginVertical: 7,
    },
    off:{
        color:colorConstance.primaryRed,
        fontWeight:'bold',
        fontSize:12,
        marginLeft:5,
    },
});

//make this component available to the app
export default HomePage;
