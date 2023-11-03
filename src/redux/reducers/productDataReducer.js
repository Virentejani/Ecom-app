/* eslint-disable prettier/prettier */

import { ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT, FILTER_LIST, PRODUCT_LIST, SET_CART_PRODUCT } from "../actions/productDataAction";

const initialState = {
    productList: [],
    filterListData: [],
    cartProducts: [],
};
const productDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_LIST:
            return { ...state, productList: action.payload };
        case FILTER_LIST:
            return { ...state, filterListData: action.payload };
        case ADD_PRODUCT:
            return { ...state, productList: action.payload };
        case DELETE_PRODUCT:
            return { ...state, cartProducts: action.payload };
        case SET_CART_PRODUCT:
            return { ...state, cartProducts: action.payload };
        default:
            return state;
    }
};

export default productDataReducer;
