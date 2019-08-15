//switches between the table of suppliers and the supplier editor component

import React from 'react';
import {SupplierEditor} from "./SupplierEditor";
import {SupplierTable} from "./SupplierTable";

export class SupplierDispaly extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showEditor: false,
            selected: null,
        }

    }

    saveSupplier = (supplier) => {
        this.props.saveCallback(supplier);
        this.setState({
            showEditor: false,
            selected: null,
        })
    };


    cancelEditing = () => {
        this.setState({
            showEditor: false,
            selected: null,
        })
    };


    createSupplier = () => {
        this.setState({
            showEditor: true,
            selected: {},
        })
    };


    startEditing =(supplier)=>{
        this.setState({
            showEditor: true,
            selected: supplier,
        })
    };


    render() {
        if (this.state.showEditor) {
            return <SupplierEditor
                key={this.state.selected.id || -1}
                supplier={this.state.selected}
                saveCallback={this.saveSupplier}
                cancelCallback={this.cancelEditing}
            />
        } else {
            return <div className="m-2">
                <SupplierTable
                    suppliers={this.props.suppliers}
                    editCallBack={this.startEditing}
                    deleteCallback={this.props.deleteCallback}
                />
                <div className="text-center">
                    <button
                        className="btn btn-primary m-1"
                        onClick={this.createSupplier}
                    >
                        Create Supplier
                    </button>
                </div>
            </div>
        }
    }
}