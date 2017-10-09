import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Locations from './components/Locations';

// require('./Styles/style.css')
class App extends Component {
  render() {
    return (
      <div>
        <h1>Talk App</h1>
        <Locations />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
