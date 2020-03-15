import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import appStore from './store';
import Home from './views/home';

function App() {
  return (
    <Provider store={appStore}>
       <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Redirect to="/" />
          </Switch>
        </Router>
    </Provider>
  );
}

export default App;
