import './styles/styles.scss';

import {
  Link,
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom'

import App from './containers/App/App';
import Home from './containers/Home/Home';
import NotFound from './containers/App/NotFound';
import Profile from './containers/Profile/Profile';
import React from 'react';
import { render } from 'react-dom';

render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/profile" component={Profile}/>
        <Route component={NotFound}/>
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));
