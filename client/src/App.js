import React from 'react';
import './App.css';

import RouteManager from './components/RouteManager'


class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <RouteManager/>
    );
  }
}

export default App;
