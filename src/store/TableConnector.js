import T from './T';
import {connect} from 'react-redux';
import {startEditingProduct, startEditingSupplier} from "./stateActionCreators";
import {deleteProduct, deleteSupplier} from "./modelActionCreators";


export const TableConnector = (dataType, presentationComponent) => {

    const mapStateToProps = (storeData, ownProps) => {

        if (!ownProps.needSuppliers) {
            return {
                products: storeData.modelData[T.PRODUCTS]
            }
        } else {
            return {
                products: storeData.modelData[T.PRODUCTS],
                suppliers: storeData.modelData[T.SUPPLIERS].map(supp => (
                    {
                        ...supp,
                        products: supp.products.map(id =>
                            storeData.modelData[T.PRODUCTS]
                                .find(p => p.id === Number(id) || id)
                                .map(val => val.name || val)
                        )
                    }
                )),
            }
        }
    };

    // const mapDispatchToProps = {
    //     editCallback: dataType === T.PRODUCTS ? startEditingProduct : startEditingSupplier,
    //     deleteCallback: dataType === T.PRODUCTS ? deleteProduct : deleteSupplier,
    // };


    //function mapDispatchToProps:
    const mapDispatchToProps = (dispatch, ownProps) => {
        if(!ownProps.needSuppliers){
            return {
                editCallback: (...args)=>dispatch(startEditingProduct(...args)),
                deleteCallback: (...args)=>dispatch(deleteProduct(...args))
            }
        } else {
            return {
                editCallback: (...args)=>dispatch(startEditingSupplier(...args)),
                deleteCallback: (...args)=>dispatch(deleteSupplier(...args))
            }
        }
    };

    return connect(mapStateToProps, mapDispatchToProps)(presentationComponent);
};