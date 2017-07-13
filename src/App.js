import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './containers/navigation/Navbar';
import Landing from './containers/pages/Landing/Landing';
import NotFound from './containers/pages/NotFound/NotFound';
import Movie from './containers/pages/Movie/Movie';
import Actor from './containers/pages/Actor/Actor.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route path='/movie/:id' component={Movie} />
              <Route path='/actor/:id' component={Actor} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
