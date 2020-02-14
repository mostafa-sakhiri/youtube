import React from 'react'
import Dashboard from '../screens/dashboard'

import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router
} from 'react-router-dom'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Dashboard}></Route>
        <Route path='/dashboard' component={Dashboard}></Route>
        <Redirect to='/' />
      </Switch>
    </Router>
  )
}

export default Routes
