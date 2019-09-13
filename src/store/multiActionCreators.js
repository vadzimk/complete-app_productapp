import T from './T';
import {saveProduct, saveSupplier} from "./modelActionCreators";
import {endEditing} from "./stateActionCreators";


export const saveAndEndEditing = (data, dataType) =>
    [
        dataType === T.PRODUCTS ? saveProduct(data) : saveSupplier(data),
        endEditing()
    ];