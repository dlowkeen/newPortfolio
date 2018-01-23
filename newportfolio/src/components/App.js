import React, { Component } from 'react';
import Header from './common/Header';
import Body from './body/Body';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
