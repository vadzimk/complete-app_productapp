/**
 * Presents a prompt to the user that is inline with the rest of the application's content
 * */

import React from 'react';

export class CustomPrompt extends React.Component {

    render() {
        if (this.props.show) {
            return <div className="alert alert-warning m-2 text-center">
                <h4 className="alert-heading">
                    Navigation warning
                </h4>
                {this.props.message}
                <div className="p-1">
                    <button className="btn-btn-primary m-1" onClick={() => this.props.callback(true)}>
                        Yes
                    </button>
                    <button className="btn btn-secondary m-1" onClick={() => this.props.callback(false)}>
                        No
                    </button>
                </div>
            </div>
        }
        return null;
    }
}