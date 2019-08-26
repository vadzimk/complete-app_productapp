//this component will switch between the table of products and the product editor.

import React from 'react';
import {ProductEditor} from "./ProductEditor";
import {ProductTable} from "./ProductTable";
import {connect} from "react-redux";
//import {deleteProduct, saveProduct} from "./store";
import {EditorConnector} from "./store/EditorConnector";
import T from './store/T';
import {TableConnector} from "./store/TableConnector";
import {startCreatingProduct} from "./store/stateActionCreators";

const ConnectedEditor = EditorConnector(T.PRODUCTS, ProductEditor);
const ConnectedTable = TableConnector(T.PRODUCTS, ProductTable);

class ProductDisplay extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         showEditor: false,
    //         selectedProduct: null,
    //     }
    // }
    //
    // saveProduct = (product) => {
    //     this.props.saveCallback(product);
    //     this.setState(
    //         {
    //             showEditor: false,
    //             selectedProduct: null,
    //         }
    //     );
    // };
    //
    // cancelEditing = () => {
    //     this.setState(
    //         {
    //             showEditor: false,
    //             selectedProduct: null,
    //         }
    //     );
    // };
    //
    // startEditing = (product) => {
    //     this.setState(
    //         {
    //             showEditor: true,
    //             selectedProduct: product,
    //         }
    //     );
    // };
    //
    // createProduct = () => {
    //     this.setState(
    //         {
    //             showEditor: true,
    //             selectedProduct: {},
    //         }
    //     );
    // };

    render() {

        if (this.state.showEditor) {
            return <ConnectedEditor key={this.props.selected.id || -1}/>
            // return <ProductEditor
            //     key={this.state.selectedProduct.id || -1}
            //     product={this.state.selectedProduct}
            //     saveCallback={this.saveProduct}
            //     cancelCallback={this.cancelEditing}
            //
            // />
        } else {
            return <div className="m-2">
                <ConnectedTable/>
                { /* <ProductTable
                    products={this.props.products}
                    editCallback={this.startEditing}
                    deleteCallback={this.props.deleteCallback}
                /> */}
                <div className="text-center">
                    <button className="btn btn-primary m-1"
                            onClick={this.props.createProduct}
                    >
                        Create Product
                    </button>
                </div>
            </div>
        }
    }
}


const mapStateToProps = (storeData) => ({
    editing: storeData.stateData.editing,
    selected: storeData.modelData[T.PRODUCTS].find(p => p.id === storeData.stateData.selectedId) || {}
});

const mapDispatchToProps = { //object form
    createProduct: startCreatingProduct,

};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDisplay);