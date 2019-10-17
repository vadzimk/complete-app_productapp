import React from 'react';
import {Route, Link, Redirect} from 'react-router-dom';

export class ToggleLink extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            doRedirect: false
        }
    }

    handleClick =()=>{
        this.setState({doRedirect: true},
            ()=>this.setState({doRedirect: false}))
    }


    ///*Navigating programmatically*/
    ////uses push method of the history to navigate to the locaction specified by the to prop
    // handleClick=(history)=>{
    //     history.push(this.props.to)
    // };
    ///*END Navigating programmatically*/

    render() {
        return <Route path={this.props.to} exact={this.props.exact}
                      children={routeProps => {
                          const baseClasses = this.props.className || "m-2 btn btn-block";
                          const activeClass = this.props.activeClass || "btn-primary";
                          const inActiveClass = this.props.inActiveClass || "btn-secondary";

                          const combinedClasses = `${baseClasses} ${routeProps.match ? activeClass : inActiveClass}`;


                          //onClick handler passes the history object received from the Route component to the handleClick method
                          return <>
                              {this.state.doRedirect && <Redirect to={this.props.to}/>}
                              <button
                                      className={combinedClasses}
                                      onClick={()=>this.handleClick()}>
                                      {this.props.children}
                                  </button>
                              </>

                          ///*Navigating programmatically*/
                          // <button
                          //     className={combinedClasses}
                          //     onClick={()=>this.handleClick(routeProps.history)}>
                          //     {this.props.children}
                          // </button>
                          ///*END Navigating programmatically*/

                          {/*<Link to={this.props.to} className={combinedClasses}>*/}
                          {/*    {this.props.children}*/}
                          {/*</Link>*/}
                      }}
        />
    }
}