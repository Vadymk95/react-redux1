import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { paths } from '../constants';
import { Main, About, Settings, NotFound } from '../pages';
import { Navbar } from '../components';

export const Routing = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path={paths.main} exact>
          <Main />
        </Route>
        <Route path={paths.about} exact>
          <About />
        </Route>
        <Route path={paths.settings} exact>
          <Settings />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};
