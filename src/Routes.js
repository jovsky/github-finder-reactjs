import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Repositories from './pages/repositories/index';
import Home from './pages/home/index';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/repositories' component={Repositories} />
      </Switch>
    </BrowserRouter>
  )
}