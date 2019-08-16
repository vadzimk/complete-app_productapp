// Switches between the product and supplier features.
// it is a container that renders a button for each of its children and displays only the one selected by the user.

import React from 'react';

export class Selector extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selection: React.Children.toArray(props.children)[0].props.name,
        }
    }

    setSelection =(event)=>{
        event.persist();
        this.setState({
            selection: event.target.name,
        })
    };

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2">
                        {React.Children.map(this.props.children, c =>
                            <button
                                name={c.props.name}
                                onClick={this.setSelection}
                                className={`btn btn-block m-2 ${this.state.selection === c.props.name ? "btn-primary active" : "btn-secondary"}`}
                            >
                                {c.props.name}
                            </button>
                        )}
                    </div>
                    <div className="col">
                        {
                            React.Children.toArray(this.props.children).filter(c=>c.props.name===this.state.selection)
                        }
                    </div>
                </div>
            </div>
        )
    }
}