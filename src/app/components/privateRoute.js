import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivateRoute = ({
    component: Component,
    ...rest
}) => {
    const auth = useSelector(state => state.auth)
    const { isAuthenticated } = auth
    return (
        <Route
            {...rest}
            render={ props => {
                if(!isAuthenticated) {
                    return (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: {
                                    from: props.location
                                }
                            }}
                            />
                    )
                } else {
                    return <Component {...props} />
                }
            }}
            />
    )
}