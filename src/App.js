import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'

import logo from './assets/logo.png';
import './App.css';
import { Button } from 'reactstrap';

import Home from './containers/Home'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" to="/"/>
            <h1 className="App-title">Admin Webpage</h1>
          </header>
          <Router>
            <div>
              <Switch>
                <Route exact path="/" component={Home} />
              </Switch>
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
