import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import routePaths from '../lib/constans/routePaths';
import GlobalStyle from '../lib/styles/globalStyles';
import Home from './Home';
import Game from './Game';

const Routes = () => {
  return (
    <Router>
      <GlobalStyle />
        <Route exact path={routePaths.home} component={Home} />
        <Route exact path={routePaths.game} component={Game} />
    </Router>
  );
}

export default Routes;
