import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from './components/App';
import Content from './components/Content';

const Routes = props => (
  <Router { ...props }>
    <Route path="/" component={ App }>
      <IndexRoute component={ Content } />
    </Route>
  </Router>
);

export default Routes;
