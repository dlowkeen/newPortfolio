import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Body from './body/Body';
import * as actions from '../actions';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Route path="/" component={Body} />
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
