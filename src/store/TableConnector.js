import T from './T';
import {connect} from 'react-redux';
import {startEditingProduct, startEditingSupplier} from "./stateActionCreators";
import {deleteProduct, deleteSupplier} from "./modelActionCreators";


export const TableConnector = (dataType, presentationComponent) => {

    const mapStateToProps = (storeData) => {
        return {
            products: storeData.modelData[T.PRODUCTS],
            suppliers: storeData.modelData[T.SUPPLIERS],
        }
    };

    const mapDispatchToProps = {
        editCallback: dataType === T.PRODUCTS ? startEditingProduct : startEditingSupplier,
        deleteCallback: dataType === T.PRODUCTS ? deleteProduct : deleteSupplier,
    };

    return connect(mapStateToProps, mapDispatchToProps)(presentationComponent);
};