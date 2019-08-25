// this creates the Redux store

import {combineReducers, createStore} from "redux";
import modelReducer from "./modelReducer";
import stateReducer from "./stateReducer";

export default createStore(combineReducers({
        modelData: modelReducer,
        stateData: stateReducer,
    }
)); //store is created by passing reducer to the createStore function
//reducers are combined to form a combined reducer:
// argument for createReducers function is an object whose property names correspond to sections of data store and the reducers that will manage them


//this allows import these functions from the folder /store
export {saveProduct, saveSupplier, deleteProduct, deleteSupplier} from './modelActionCreators'