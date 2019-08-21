// Provides data tha will be displayed by the application and implementation for the callback functions

import React from 'react';
import {Selector} from "./Selector";
import ProductDisplay from "./ProductDisplay";
import {SupplierDispaly} from "./SupplierDispaly";

export default class ProductsAndSuppliers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    id: 1,
                    name: "Kayak",
                    category: "Watersports",
                    price: 275,
                },
                {
                    id: 2,
                    name: "Lifejacket",
                    category: "Watersports",
                    price: 48.95,
                },
                {
                    id: 3,
                    name: "Soccer Ball",
                    category: "Soccer",
                    price: 19.50
                },
            ],
            suppliers: [
                {
                    id: 1,
                    name: "Surf Dudes",
                    city: "San Jose",
                    products: [1, 2],
                },
                {
                    id: 2,
                    name: "Field Suppliers",
                    city: "New York",
                    products: [3],
                },
            ],
        };

        this.idCounter = 100;

    }

    saveData = (collection, item) => {
        if (item.id === "") {
            item.id = this.idCounter++;
            this.setState(state => state[collection] = state[collection].concat(item))
        } else {
            this.setState(state => state[collection] = state[collection].map(stored => stored.id === item.id ? item : stored)) //creates a new array and if the stored id is equal to the item's id than put item otherwise put the stored
        }
    };

    deleteData = (collection, item) => {
        this.setState(state => state[collection] = state[collection].filter(stored => stored.id !== item.id))
    };

    render() {
        return (
            <div>
                <Selector>
                    <ProductDisplay
                        name="Products"
                        products={this.state.products}
                        saveCallback={p => this.saveData("products", p)}
                        deleteCallback={p => this.deleteData("products", p)}
                    />
                    <SupplierDispaly
                        name="Suppliers"
                        suppliers={this.state.suppliers}
                        saveCallback={s => this.saveData("suppliers", s)}
                        deleteCallback={s => this.deleteData("suppliers", s)}
                    />
                </Selector>
            </div>
        );
    }
}