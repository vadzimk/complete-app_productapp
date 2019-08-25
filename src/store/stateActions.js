import T from './T';


//action creator function returns an object that will be dealt by reducer function

export const startEditingProduct = (product) => {
    return{
        type:T.START_EDITING,
        dataType: T.PRODUCTS,
        payload: product,
    }
};


export const startEditingSupplier = (supplier) => {
    return{
        type: T.START_EDITING,
        dataType: T.SUPPLIERS,
        payload: supplier,
    }
};

export const endEditing = () => {
    return {
        type: T.END_EDITING
    }
};

export const startCreatingProduct = () => {
    return{
        type: T.START_CREATING,
        dataType: T.PRODUCTS,
    }
};

export const startCreatingSupplier = () => {
    return{
        type: T.START_CREATING,
        dataType: T.SUPPLIERS,
    }
};

