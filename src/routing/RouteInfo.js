import React from "react";

export class RouteInfo extends React.Component {
    renderTable(title, prop, propertyNames) {
        return <>
            <tr>
                <th colSpan="2" className="text-center">{title}</th>
            </tr>
            {propertyNames.map(p =>
                <tr key={p}>
                    <td>{p}</td>
                    <td>{JSON.stringify(prop[p])}</td>
                </tr>
            )}
        </>
    }

    render() {
        return <div className="bg-info m-2 p-2">
            <h4 className="text-center text-white">
                Route Info
            </h4>
            <table className="table table-sm table-striped bg-light">
                <tbody>
                {this.renderTable("Match", this.props.match, ["url", "path", "params", "isExact"])}
                </tbody>
            </table>
        </div>
    }
}