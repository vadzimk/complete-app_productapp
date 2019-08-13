//this component will switch between the table of products and the product editor.

import React from 'react';
import {ProductEditor} from "./ProductEditor";
import {ProductTable} from "./ProductTable";

export class ProductDisplay extends React.Component{
    constructor(props){
        super(props);
        this.state={
            showEditor: false,
            selectedProduct: null,
        }
    }

    saveProduct=(product)=>{
        this.props.saveCallback(product);
        this.setState(
            {
                showEditor: false,
                selectedProduct: null,
            }
        );
    };

    cancelEditing=()=>{
        this.setState(
            {
                showEditor: false,
                selectedProduct: null,
            }
        );
    };

    startEditing=(product)=>{
        this.setState(
            {
                showEditor: true,
                selectedProduct: product,
            }
        );
    };

    createProduct=()=>{
        this.setState(
            {
                showEditor: true,
                selectedProduct: {},
            }
        );
    };

    render() {

        if(this.state.showEditor){
            return <ProductEditor
                key={this.state.selectedProduct.id || -1}
                product={this.state.selectedProduct}
                saveCallback={this.saveProduct}
                cancelCallback={this.cancelEditing}

            />
        } else {
            return <div className="m-2">
                <ProductTable
                    products={this.props.products}
                    editCallback={this.startEditing}
                    deleteCallback={this.props.deleteCallback}
                />
                <div className="text-center">
                    <button className="btn btn-primary m-1"
                        onClick={this.createProduct}
                    >
                        Create Product
                    </button>
                </div>
            </div>
        }
    }
}