import T from './T';
import {initialData} from "./initialData";

export default function (storeData, action) { //storeData from the book is state
    switch (action.type) {
        case T.STORE:
            return {
                ...storeData,
                [action.dataType]: storeData[action.dataType].concat([action.payload])
            };
        case T.UPDATE:
            return {
                ...storeData,
                [action.dataType]: storeData[action.dataType].map(p =>
                    p.id === action.payload.id ? action.payload : p)
            };
        case T.DELETE:
            return {
                ...storeData,
                [action.dataType]: storeData[action.dataType].filter(p =>
                    p.id != action.payload)
            };
        default:
            return storeData || initialData;
    }
}