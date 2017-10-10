import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';

// require('./Styles/style.css')
class App extends Component {
  render() {
    return (
      <div>
        <h1>Talk App</h1>
        <Layout />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
