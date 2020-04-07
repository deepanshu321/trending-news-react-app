import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import history from '../history';
import Home from './Home'
import Newsfetch from './newsfetch'
const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/:id" exact component={Newsfetch} />
            
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;