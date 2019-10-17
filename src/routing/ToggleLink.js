import React from 'react';
import {Route, Link} from 'react-router-dom';

export class ToggleLink extends React.Component {

    //uses push method of the history to navigate to the locaction specified by the to prop
    handleClick=(history)=>{
        history.push(this.props.to)
    };

    render() {
        return <Route path={this.props.to} exact={this.props.exact}
                      children={routeProps => {
                          const baseClasses = this.props.className || "m-2 btn btn-block";
                          const activeClass = this.props.activeClass || "btn-primary";
                          const inActiveClass = this.props.inActiveClass || "btn-secondary";

                          const combinedClasses = `${baseClasses} ${routeProps.match ? activeClass : inActiveClass}`;


                          //onClick handler passes the history object received from the Route component to the handleClick method
                          return <button
                              className={combinedClasses}
                              onClick={()=>this.handleClick(routeProps.history)}>
                              {this.props.children}
                          </button>

                          {/*<Link to={this.props.to} className={combinedClasses}>*/}
                          {/*    {this.props.children}*/}
                          {/*</Link>*/}
                      }}
        />
    }
}