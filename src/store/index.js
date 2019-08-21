// this creates the Redux store

import {createStore} from "redux";
import modelReducer from "./modelReducer";

export default createStore(modelReducer); //store is created by passing reducer to the createStore function



//this allows import these functions from the folder /store
export {saveProduct, saveSupplier, deleteProduct, deleteSupplier } from './modelActionCreators'