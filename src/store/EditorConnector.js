import {connect} from "react-redux";
import T from './T';
import {endEditing} from "./stateActionCreators";
import {saveProduct, saveSupplier} from "./modelActionCreators";
import {saveAndEndEditing} from "./multiActionCreators";


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
        cancelCallback: endEditing,
        saveCallback: (data) => saveAndEndEditing(data, dataType)
    };

    //after applying middleware mapDispatchToProps will become a plain object
    // const mapDispatchToProps = (dispatch) => {
    //     return {
    //         cancelCallback: () => dispatch(endEditing()),
    //         saveCallback: data => {
    //             dispatch ((dataType === T.PRODUCTS ? saveProduct : saveSupplier)(data));
    //             dispatch(endEditing());
    //
    //         },
    //     };
    // };


    return connect(mapStateToProps, mapDispatchToProps)(presentationComponent);
};