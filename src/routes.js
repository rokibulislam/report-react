import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  
import Login from './pages/login'
import Register from './pages/register'
import Settings from './pages/settings'
import Profit from './pages/profit'
import Dashboard from './pages/dashboard'
import Cashflow from './pages/cashflow'
import Customer from './pages/customer'
import CustomerAdmin from './pages/customer-admin'

import ProtectedRoute from "./components/common/protectedRoute";
const Routes = () => {
    return ( 
        <Router>
            <Switch>
                <Route path="/login"  component={Login}/>
                <Route path="/register"  component={Register}/>
                <ProtectedRoute path="/" exact component={Dashboard}/>
                <ProtectedRoute path="/settings"  component={Settings}/>
                <ProtectedRoute path="/profit"  component={Profit}/>
                <ProtectedRoute path="/dashboard"  component={Dashboard}/>
                <ProtectedRoute path="/cashflow"  component={Cashflow}/>
                <ProtectedRoute path="/customer"  component={Customer}/>
                <ProtectedRoute path="/customer-admin"  component={CustomerAdmin}/>
            </Switch>
        </Router>
    );
}
   
  export default Routes;