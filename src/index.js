import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import Login from './screens/login'

const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
      <Route exact path='/' component={App} />
      <Route path='/login' component={Login} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
