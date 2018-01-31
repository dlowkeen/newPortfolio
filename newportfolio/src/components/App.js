import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Body from './body/Body';
import PhotographyPage from './body/photography/PhotographyPage';
import * as actions from '../actions';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path="/" component={Body} />
          <Route exact={true} path="/photography" component={PhotographyPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
