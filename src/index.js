import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Layout from './layouts/Layout';
import styles from './Styles/styles';

class App extends Component {
  render() {
    return (
      <div>
        <h1 style={styles.universal.header}>Talk App</h1>
        <Layout />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
