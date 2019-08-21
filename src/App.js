import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import dataStore from './store';

import ProductsAndSuppliers from "./ProductsAndSuppliers";


export default class App extends React.Component {

    render() {
        return <Provider store={dataStore}>
            <ProductsAndSuppliers/>
        </Provider>
    }
}
