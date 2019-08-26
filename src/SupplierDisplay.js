//switches between the table of suppliers and the supplier editor component

import React from 'react';
import {SupplierEditor} from "./SupplierEditor";
import {SupplierTable} from "./SupplierTable";
import {connect} from "react-redux";

import {deleteSupplier, saveSupplier} from "./store";
import {EditorConnector} from "./store/EditorConnector";
import T from './store/T';
import {TableConnector} from "./store/TableConnector";
import {startCreatingSupplier} from "./store/stateActionCreators";


const ConnectedEditor = EditorConnector(T.SUPPLIERS, SupplierEditor);
const ConnectedTable = TableConnector(T.SUPPLIERS, SupplierTable);


class SupplierDisplay extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         showEditor: false,
    //         selected: null,
    //     }
    //
    // }
    //
    // saveSupplier = (supplier) => {
    //     this.props.saveCallback(supplier);
    //     this.setState({
    //         showEditor: false,
    //         selected: null,
    //     })
    // };
    //
    //
    // cancelEditing = () => {
    //     this.setState({
    //         showEditor: false,
    //         selected: null,
    //     })
    // };
    //
    //
    // createSupplier = () => {
    //     this.setState({
    //         showEditor: true,
    //         selected: {},
    //     })
    // };
    //
    //
    // startEditing =(supplier)=>{
    //     this.setState({
    //         showEditor: true,
    //         selected: supplier,
    //     })
    // };
    //

    render() {
        if (this.props.editing) {
            return <ConnectedEditor key={this.props.selected.id || -1}/>
            // return <SupplierEditor
            //     key={this.state.selected.id || -1}
            //     supplier={this.state.selected}
            //     saveCallback={this.saveSupplier}
            //     cancelCallback={this.cancelEditing}
            // />
        } else {
            return <div className="m-2">
                <ConnectedTable/>

                { /*<SupplierTable
                    suppliers={this.props.suppliers}
                    editCallback={this.startEditing}
                    deleteCallback={this.props.deleteCallback}
                /> */}
                <div className="text-center">
                    <button
                        className="btn btn-primary m-1"
                        onClick={this.props.createSupplier}
                    >
                        Create Supplier
                    </button>
                </div>
            </div>
        }
    }
}


const mapStateToProps = (storeData) => ({
    editing: storeData.stateData.editing,
    selected: storeData.modelData[T.SUPPLIERS].find(s => s.id === storeData.stateData.selectedId) || {},
});

const mapDispatchToProps = {
    createSupplier: startCreatingSupplier,
};

export default connect(mapStateToProps, mapDispatchToProps)(SupplierDisplay);