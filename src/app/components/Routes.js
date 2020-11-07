import React from "react";

import { Switch, Route } from "react-router-dom";

import { PrivateRoute } from "./privateRoute";

import FacebookLoginPage from "../containers/FacebookLoginPage";
import Home from "../containers/Home";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/login" component={FacebookLoginPage} />
            <PrivateRoute exact path="/" component={Home} />
        </Switch>
    );
};

export default Routes;
