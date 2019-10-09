import React from 'react';

import './App.css';
import {Provider} from 'react-redux';
import dataStore from './store';


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
