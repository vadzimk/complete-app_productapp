import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import dataStore from './store';

import ProductsAndSuppliers from "./ProductsAndSuppliers";
import {Selector} from "./Selector";
import ProductDisplay from "./ProductDisplay";
import SupplierDisplay from "./SupplierDisplay";


export default class App extends React.Component {

    render() {
        return <Provider store={dataStore}>
            <Selector>
                <ProductDisplay name="Products"/>
                <SupplierDisplay name="Suppliers"/>
            </Selector>
        </Provider>
    }
}
