import React from 'react'
import { Redirect, Route } from 'react-router';

export default function PrivateRoute({component: component, ...rest}) {
    const isAuth= localStorage.getItem("token");
    if (isAuth) {
        return <Route component={component} {...rest}/>;
    }
    return <Redirect to='/login'/>;
}
