/* eslint-disable prettier/prettier */


export const PRODUCT_LIST = 'PRODUCT_LIST';
export const FILTER_LIST = 'FILTER_LIST';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const EDIT_PRODUCT = 'EDIT_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const SET_CART_PRODUCT = 'SET_CART_PRODUCT';


export const productList = request => async dispatch => {
    dispatch({ type: PRODUCT_LIST, payload: request });
};

export const filterList = request => async dispatch => {
    dispatch({ type: FILTER_LIST, payload: request });
};

export const addProduct = request => async dispatch => {
    dispatch({ type: ADD_PRODUCT, payload: request });
};

export const deleteProduct = request => async dispatch => {
    dispatch({ type: DELETE_PRODUCT, payload: request });
};

export const setCartProduct = request => async dispatch => {
    dispatch({ type: SET_CART_PRODUCT, payload: request });
};
