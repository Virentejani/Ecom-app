/* eslint-disable prettier/prettier */

import { combineReducers } from 'redux';
import productDataReducer from './reducers/productDataReducer';

const rootReducer = combineReducers({
    productData: productDataReducer,
});

export default rootReducer;
