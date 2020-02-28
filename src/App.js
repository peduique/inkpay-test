import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styles from './App.module.css';

import Menu from './components/Menu';
import HomePage from './components/HomePage';
import CounterPage from './components/CounterPage';

import store from './store';

const App = (props) => {
  return (
    <Router>
      <Provider store={store}>
        <Menu />
        <div className={styles.container}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/counter" component={CounterPage} />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;