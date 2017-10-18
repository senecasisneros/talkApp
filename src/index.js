import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Layout from './layouts/Layout';
import styles from './Styles/styles';
import { Provider } from 'react-redux';
import store from './stores/store';

class App extends Component {
  render() {
    return (
      <Provider store={ store.configureStore() }>
        <div>
          <h1 style={styles.universal.header}>Talk App</h1>
          <Layout />
        </div>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
