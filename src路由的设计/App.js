import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  NavLink,
  Route
} from 'react-router-dom'

import { navConfig } from './router/config'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {
            navConfig.map((item) => {
              return (
                <NavLink
                  key={item.path}
                  to={item.path}>{item.title}</NavLink>

              )
            })
          }

          {
            navConfig.map((item) => {
              return (
                <Route
                  exact
                  key={item.path}
                  path={item.path} 
                  component={item.component}
                />

              )
            })
          }
        </div>
      </Router>
    );
  }
}

export default App;
