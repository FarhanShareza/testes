import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AppMainUser } from '../../pages/Users';


const Routes = () => {
    return (
        <Router>
            <Switch>
                  <Route path="/">
                      <AppMainUser/>
                  </Route>
            </Switch>
        </Router>
    )
}
export default Routes
