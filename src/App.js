import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppMain from './AppMain';
import AppNavigation from './AppNavigation';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <a className="skip" href="#main">
            Skip to content
          </a>
          <div className="row">
            <header className="col-xs-12 page-header">
              <h1>My task manager</h1>
            </header>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-4">
              <AppNavigation />
            </div>
            <div
              className="col-xs-12 col-sm-8 border-devide"
              id="main"
              tabIndex="-1"
            >
              <AppMain />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
