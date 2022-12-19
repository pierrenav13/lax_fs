import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../../utils/route_utils";
import ExternalNavBar from "./navbar_auth_splash";

class NavBar extends Component {
    render(){
        return(
            <nav>
                <Routes>
                    <Route path={["/welcome","/login"]} render={props => <ExternalNavBar {...this.props} />} />
                </Routes>                   
            </nav>
        )
    }
}

export default NavBar