import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ScrollToTop from './ScrollToTop';
import Navbar from './containers/navigation/Navbar';
import Landing from './containers/pages/Landing/Landing';
import NotFound from './containers/pages/NotFound/NotFound';
import Movie from './containers/pages/Movie/Movie';
import Tv from './containers/pages/Tv/Tv';
import Actor from './containers/pages/Actor/Actor.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <ScrollToTop>
          <div>
            <Navbar />
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route path='/movie/:id' component={Movie} />
              <Route path='/tv/:id' component={Tv} />
              <Route path='/actor/:id' component={Actor} />
              <Route component={NotFound} />
            </Switch>

          </div>
          </ScrollToTop>
        </Router>
      </div>
    );
  }
}

export default App;
