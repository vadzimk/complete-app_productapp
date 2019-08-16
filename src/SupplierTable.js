//displays  table of suppliers
//maps each object in the suppliers prop array into a SupplierTableRow
//the props for callbacks are recieved from the parent component and passed on


import React from 'react';
import {SupplierTableRow} from "./SupplierTableRow";

export class SupplierTable extends React.Component {

    render() {
        return (
            <table className="table table-sm table-striped table-bordered">
                <thead>
                <tr>
                    <th colSpan='5' className="bg-primary text-white text-center h4 p-2">
                        Suppliers
                    </th>
                </tr>
                <tr>
                    <th>IDi</th>
                    <th>Name</th>
                    <th>City</th>
                    <th>Products</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    this.props.suppliers.map((supplier) =>
                        <SupplierTableRow
                            supplier={supplier}
                            key={supplier.id}
                            editCallback={this.props.editCallback}
                            deleteCallback={this.props.deleteCallback}/>
                    )
                }
                </tbody>
            </table>
        )
    }
}