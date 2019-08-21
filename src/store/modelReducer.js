import T from './T';
import {initialData} from "./initialData";

export default function (state, action) { //storeData from the book is state
    switch (action.type) {
        case T.STORE:
            return {
                ...state,
                [action.dataType]: state[action.dataType].concat([action.payload])
            };
        case T.UPDATE:
            return {
                ...state,
                [action.dataType]: state[action.dataType].map(p =>
                    p.id === action.payload.id ? action.payload : p)
            };
        case T.DELETE:
            return {
                ...state,
                [action.dataType]: state[action.dataType].filter(p =>
                    p.id != action.payload)
            };
        default:
            return state || initialData;
    }
}