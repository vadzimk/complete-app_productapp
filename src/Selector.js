// Switches between the product and supplier features.
// it is a container that renders a button for each of its children and displays only the one selected by the user.


import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch, Redirect, NavLink, withRouter, Prompt} from "react-router-dom";
import ProductDisplay from "./ProductDisplay";
import SupplierDisplay from "./SupplierDisplay";
import {RouteInfo} from "./routing/RouteInfo";
import {ToggleLink} from "./routing/ToggleLink";
import {CustomPrompt} from "./routing/CustomPrompt";

/*withRouter is a higher order component that provides access to the routing system without directly using a Route. When a component is passed to withRouter, it receives the match, location, history objects as props just as though it had been rendered by a Route using the component prop. This can be a convenient alternative to writing components that render a Route.
    the withRouter function doesn't provide support for matching paths, which means that the match object is of little use. The location object, however, provides details of the application's current location, and the history object can be used for programmatic navigation.
 */

//const RouteInfoHOC = withRouter(RouteInfo);

export class Selector extends React.Component {

    //rendering custom prompt
    constructor(props) {
        super(props);
        this.state = {
            showPrompt: false,
            message: "",
            callback: () => {} //an empty function that is doing nothing
        }
    }

    customGetUserConfirmation=(message, navCallback)=>{
      this.setState({
          showPrompt: true,
          message: message,
          callback: (allow)=>{
              navCallback(allow);
              this.setState({showPrompt: false});
          }
      })
    };

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

    renderMessage = (msg) => <h5 className="bg-info text-white m-2 p-2">{msg}</h5>

    //BrowserRouter which is aliased here to Router accepts a special prop - getUserConfirmation that is used to replace the default prompt with a custom function.
    render() {
        const routes = React.Children.map(this.props.children, child => ({
            component: child,
            name: child.props.name,
            url: `/${child.props.name.toLowerCase()}`
        }));

        return (
            <Router getUserConfirmation={this.customGetUserConfirmation}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-2">

                            {routes.map(r=><ToggleLink key={r.url} to={r.url}>{r.name}</ToggleLink>)}

                            {/*<NavLink className="m-2 btn btn-primary btn-block" activeClassName="active" to="/" exact={true}>Default URL</NavLink>*/}
                            {/*<ToggleLink className="m-2 btn btn-primary btn-block" activeClassName="active"*/}
                            {/*            to="/products">Products</ToggleLink>*/}
                            {/*<ToggleLink className="m-2 btn btn-primary btn-block" activeClassName="active"*/}
                            {/*            to="/suppliers">Suppliers</ToggleLink>*/}

                            {/*<ToggleLink className="m-2 btn btn-primary btn-block" activeClassName="active"*/}
                            {/*            to="/info/match">Match</ToggleLink>*/}
                            {/*<ToggleLink className="m-2 btn btn-primary btn-block" activeClassName="active"*/}
                            {/*            to="/info/location">Location</ToggleLink>*/}
                            {/*<ToggleLink className="m-2 btn btn-primary btn-block" activeClassName="active" to="/info">All*/}
                            {/*    Info</ToggleLink>*/}

                            {/*<NavLink className="m-2 btn btn-primary btn-block" activeCalssName="active" to="/old/data">Old Link</NavLink>*/}

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


                            <CustomPrompt show={this.state.showPrompt} message={this.state.message} callback={this.state.callback}/>


                            {/*message prop defines the message displayed to the user*/}
                            {/*when prop defines condition needed to show the prompt*/}
                            <Prompt message={location => `Do you want to navigate to ${location.pathname}?`}/>

                            {/*<RouteInfoHOC/>*/}

                            <Switch>

                                {routes.map(r=><Route key={r.url} path={r.url} render={()=>r.component}/>)}
                                <Redirect to={routes[0].url}/>

                                {/*<Route path="/products" component={ProductDisplay}/>*/}
                                {/*<Route path="/suppliers" component={SupplierDisplay}/>*/}
                                {/*<Route path="/info/:datatype?" component={RouteInfo}/>*/}
                                {/*/!*<Redirect from="/old/data" to="/suppliers" />*!/*/}
                                {/*<Redirect to="/products"/>*/}
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