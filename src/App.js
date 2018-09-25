import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'

import './styles/App.css';
import { Button } from 'reactstrap';

import Home from './containers/Home'
import Order from './containers/Order'
import Navbar from './components/Navbar'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <div>
              <Navbar/>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/order/:orderId" component={Order} />
              </Switch>
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
