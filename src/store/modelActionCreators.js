import T from './T';


let idCounter = 100;


export const saveProduct = (product) => {
    return createSaveEvent(T.PRODUCTS, product);
};


export const saveSupplier = (supplier) => {
    return createSaveEvent(T.SUPPLIERS, supplier);
};


const createSaveEvent=(dataType, payload)=>{ //dataType is a model dataType like PRODUCTS or SUPPLIERS

    if(!dataType.id){

        return{
            type: T.STORE,
            dataType,
            payload: {
                ...payload,
                id: idCounter++
            }
        }
    } else {
        return {
            type: T.UPDATE,
            dataType,
            payload,
        }
    }
};

export const deleteProduct=(product)=>{
    return{
        type: T.DELETE,
        dataType: T.PRODUCTS,
        payload: product.id,
    }
};


export const deleteSupplier=(supplier)=>{
    return{
        type: T.DELETE,
        dataType: T.SUPPLIERS,
        payload: supplier.id,
    }
};