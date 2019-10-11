// Switches between the product and supplier features.
// it is a container that renders a button for each of its children and displays only the one selected by the user.


import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch, Redirect} from "react-router-dom";
import ProductDisplay from "./ProductDisplay";
import SupplierDisplay from "./SupplierDisplay";


export class Selector extends React.Component {

    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //         selection: React.Children.toArray(props.children)[0].props.name,
    //     }
    // }

    // setSelection =(event)=>{
    //     event.persist();
    //     this.setState({
    //         selection: event.target.name,
    //     })
    // };

    renderMessage = (msg) => <h5 className="bg-info text-white m-2 p-2">{ msg }</h5>

    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-2">
                            <div><Link to="/">Default URL</Link></div>
                            <div><Link to="/products">Products</Link></div>
                            <div><Link to="/suppliers">Suppliers</Link></div>

                            {/*<div><Link to="/data">Data</Link></div>*/}
                            {/*<div><Link to="/data/one">Link#1</Link></div>*/}
                            {/*<div><Link to="/data/two">Link#2</Link></div>*/}
                            {/*<div><Link to="/people/bob">Bob</Link></div>*/}
                            {/*<div><Link to="/data/three">Link-3</Link></div>*/}

                            {/*<div>*/}
                            {/*    <Link to="/products">Products</Link>*/}
                            {/*</div>*/}
                            {/*<div>*/}
                            {/*    <Link to="/suppliers">Suppliers</Link>*/}
                            {/*</div>*/}
                        </div>
                        <div className="col">

                            <Switch>
                                <Route path="/products" component={ProductDisplay}/>
                                <Route path="/suppliers" component={SupplierDisplay}/>
                                <Redirect from="/old/data" to="/suppliers" />
                                <Redirect to="/products"/>
                                {/*<Route render={()=>this.renderMessage("Fallback Route")}/>*/}
                            </Switch>
                            {/*<Route path={ ["/data/one", "people/bob"] } exact={true} render={()=>this.renderMessage("Route-1")}/>*/}
                            {/*<Route path={ ["/data/two", "/people"] } render={()=>this.renderMessage("Route-2")}/>*/}
                            {/*<Route path={ ["/data/(one|three)", "/people/b*"] } render={()=>this.renderMessage("Route-3")}/>*/}

                            {/*<Route path="/products" render={(routeProps)=><ProductDisplay myProp="myValue"/>}/>*/}
                            {/*<Route path="/suppliers" render={(routeProps)=>*/}
                            {/*    <>*/}
                            {/*        <h4 className="bg-info text-center text-white p-2">*/}
                            {/*            Suppliers*/}
                            {/*        </h4>*/}
                            {/*        <SupplierDisplay/>*/}
                            {/*    </>*/}
                            {/*}/>*/}
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}