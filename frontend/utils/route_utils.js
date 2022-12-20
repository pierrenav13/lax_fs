import React from "react";
import { Route, Navigate } from "react-router-dom";
import withRouter from "../components/router";

import { connect } from "react-redux";
import { purgeErrors } from "./function_helpers";

const mapStateToProps = ({ entities: { channels }, session: { currentUserId } }) => {
    return {
        loggedIn: Boolean(currentUserId),
        mainChannel: Object.keys(channels)[0]
    }
}

const Auth = ({path, onLeave, loggedIn, exact, component: Component}) => {
    return (
        < Route 
            path={path}
            onLeave={onLeave}
            exact={exact}
            render={props => 
                loggedIn ? <Navigate to="/" />: <Component {...props} />
            }
        />
    )
}

const Protected = ({path, loggedIn, exact, component: Component}) => {
    return (
        < Route 
            path={path}
            exact={exact}
            render={props => 
                loggedIn ? <Component {...props} /> : <Navigate to="/" />
            }
        />
    )
}

export const AuthRoute = withRouter(connect(mapStateToProps,null)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps,null)(Protected));