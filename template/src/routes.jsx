import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import main from './containers/mainView';

export default (
  <Router path="/">
      <IndexRoute component={main}/>
      <Route path="main" component={main}/>
  </Router>
);