import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  
import Home from './pages/index'
import Login from './pages/login'
import Register from './pages/register'
import Settings from './pages/settings'
import Profit from './pages/profit'
import Dashboard from './pages/dashboard'
import Cashflow from './pages/cashflow'
import Customer from './pages/customer'
import CustomerAdmin from './pages/customer-admin'

const Routes = () => {
    return ( 
        <Router>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/login" exact component={Login}/>
                <Route path="/register" exact component={Register}/>
                <Route path="/settings" exact component={Settings}/>
                <Route path="/profit" exact component={Profit}/>
                <Route path="/dashboard" exact component={Dashboard}/>
                <Route path="/cashflow" exact component={Cashflow}/>
                <Route path="/customer" exact component={Customer}/>
                <Route path="/customer-admin" exact component={CustomerAdmin}/>
            </Switch>
        </Router>
    );
}
   
  export default Routes;