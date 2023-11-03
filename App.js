/* eslint-disable prettier/prettier */

//import liraries
import React, { } from 'react';
import Navigation from './src/Navigation';
import { Provider } from 'react-redux';
import store from './src/redux/store';

// create a component
const App = () => {
    return (
        <Provider store={store}>
            <Navigation />
        </Provider>
    );
};

export default App;
