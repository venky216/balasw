import React from 'react'
import Login from './containers/Login/index';
import { Switch, Redirect, Route } from 'react-router';
import Dashboard from './containers/Dashboard/index';

export const RouteMap = () => (

    <div>
        <Switch>
            <Redirect exact from="/" to="/login" />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
        </Switch>
    </div>

)