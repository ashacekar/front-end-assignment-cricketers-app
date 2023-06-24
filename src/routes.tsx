import React from 'react';
import { Route, Switch } from "react-router";
import { Router } from 'react-router-dom';
import { history } from './history';
import { Routes } from './models/Routes';
import { Cricketers } from './components/Cricketers/Cricketers';
import { CricketerDetails } from './components/CricketerDetails/CricketerDetails';

export const MainRoutes: React.FC = () => {
  return (
    <Router history={history}>
      <InnerRoutes />
    </Router>
  );
};

const InnerRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path={Routes.Home} component={Cricketers} />
      <Route path={Routes.Cricketers} component={Cricketers} />
      <Route path={Routes.CricketerDetails} component={CricketerDetails} />
    </Switch>
  );
};
