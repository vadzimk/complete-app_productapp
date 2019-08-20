// this file contains initial model data
import T from './T'

export const initialData = {
    [T.PRODUCTS]: [
        {id: 1, name: "Trail Shoes", category: "Running", price: 100},
        {id: 2, name: "Thermal Hat", category: "Running", price: 12},
        {id: 3, name: "Heated Gloves", category: "Running", price: 82.50},
    ],
    [T.SUPPLIERS]: [
        {id: 1, name: "Zoom Shoes", city: "London", products: [1]},
        {id: 2, name: "Cosy Gear", city: "New York", products: [2, 3]},
    ],
};

//the next step is to describe the operations that can be performed on the data in the store. which are called actions