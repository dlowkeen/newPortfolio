import React, { Component } from 'react';
import Header from './common/Header';
import Landing from './landing/Landing';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Landing />
      </div>
    );
  }
}

export default App;
