import {connect} from "react-redux";
import T from './T';
import {endEditing} from "./stateActions";
import {saveProduct, saveSupplier} from "./modelActionCreators";


export const EditorConnector = (dataType, presentationComponent) => {


    //mapStateToProps(state, ownProps)
    const mapStateToProps = (storeData) => {
        return {
            editing: storeData.stateData.editing && storeData.stateData.selectedType === dataType,
            product: (storeData.modelData[T.PRODUCTS].find(p => p.id === storeData.stateData.selectedId)) || {},
            supplier: (storeData.modelData[T.SUPPLIERS].find(s => s.id === storeData.stateData.selectedId)) || {},
        };
    };

    const mapDispatchToProps = {

        cancelCallback:endEditing,
        saveCallback: dataType === T.PRODUCTS ? saveProduct : saveSupplier,
    };


    return connect(mapStateToProps, mapDispatchToProps)(presentationComponent);
};