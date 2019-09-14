import React from 'react';
import {startCreatingProduct} from "./stateActionCreators";
import {resetStore} from "./CustomReducerEnhancer";

export class StoreAccess extends React.Component {

    constructor(props) {
        super(props);
        this.selectors = {
            product: (storeState) => storeState.modelData.products[0],
            state: (storeState) => storeState.stateData
        };
        this.state = this.selectData();
        this.buttonRef = React.createRef();
    }


    selectData = () => {
        let storeState = this.props.store.getState();
        return Object.entries(this.selectors).map(([key, value]) => [key, value(storeState)]).reduce((result, [k, v]) => ({
                ...result,
                [k]: v
            }), {}
        )
    };


    handleDataStoreChange = () => {
        let newData = this.selectData();
        Object.keys(this.selectors) //returns an array of property names of selectors
            .filter(key => this.state[key] !== newData[key]) //returns an array of new keys - it is important to perform a state change only when the data displayed has changed, otherwise an update would be performed for every change made to the data store.
            .forEach(key => this.setState({[key]: newData[key]})); //executes the function for each new key on the array
        //the callback function changes the value of the current component's state
    };

    componentDidMount() {
        this.unsubscriber = this.props.store.subscribe(() => this.handleDataStoreChange()); //will be invoked when there have been changes to the data store.
    }

    componentWillUnmount() {
        this.unsubscriber();
    }

    dispatchAction=()=>{
        this.buttonRef.current.disabled = true;

        this.props.store.dispatch(resetStore())
            .then(data=>this.buttonRef.current.disabled=false);
    };

    render() {
        return <>
            <div className="text-center">
                <button className="btn btn-primary m-1"
                        ref={this.buttonRef}
                        onClick={this.dispatchAction}
                >
                    Dispatch Action
                </button>
            </div>

            <div className="bg-info">
            <pre className="text-white">
                {JSON.stringify(this.state, null, 2)}
            </pre>
            </div>
        </>
    }
}