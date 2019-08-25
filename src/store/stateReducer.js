import T from './T';
import {initialData} from "./initialData";

export default function (storeData, action) {
    switch (action.type) {
        case T.START_EDITING:
        case T.START_CREATING:
            return {
                ...storeData,
                editing: true,
                selectedId: action.type === T.START_EDITING ? action.payload.id : -1,
                selectedType: action.dataType
            };
        case T.END_EDITING:
            return {
                ...storeData,
                editing: false
            };
        default:
            return storeData || initialData.stateData;
    }
}