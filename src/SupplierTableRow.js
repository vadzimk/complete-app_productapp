//this component renders a table row with a prop object named supplier/ edit and delete functions on the buttons
import React from 'react';

export class SupplierTableRow extends React.Component{

    render() {
        let supplier = this.props.supplier;

        return <tr>
            <td>{supplier.id}</td>
            <td>{supplier.name}</td>
            <td>{supplier.city}</td>
            <td>{supplier.products.join(", ")}</td>
            <td>
                <button className="btn btn-sm btn-warning m-1"
                onClick={()=>this.props.editCallback(supplier)}>
                    Edit
                </button>
                <button className="btn btn-sm btn-danger m-1"
                onClick={()=>this.props.deleteCallback(supplier)}>
                    Delete
                </button>
            </td>
        </tr>
    }
}