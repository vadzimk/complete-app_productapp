// this creates the Redux store

import {applyMiddleware, combineReducers, createStore, compose} from "redux";
import modelReducer from "./modelReducer";
import stateReducer from "./stateReducer";
import {customReducerEnhancer} from "./CustomReducerEnhancer";
import {multiActions} from "./multiActionMiddleware";
import {asyncEnhancer} from "./asyncEnhancer";


const enhanceReducer = customReducerEnhancer( //takes original reducer
    combineReducers(
        {
            modelData: modelReducer,
            stateData: stateReducer,
        }
    )
);

export default createStore(enhanceReducer, compose(applyMiddleware(multiActions), asyncEnhancer(2000)));

// export default createStore(combineReducers({
//         modelData: modelReducer,
//         stateData: stateReducer,
//     }
// )); //store is created by passing reducer to the createStore function
// //reducers are combined to form a combined reducer:
// // argument for createReducers function is an object whose property names correspond to sections of data store and the reducers that will manage them


//this allows import these functions from the folder /store
export {saveProduct, saveSupplier, deleteProduct, deleteSupplier} from './modelActionCreators'