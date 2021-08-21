/* eslint-disable no-unused-vars */
import {applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

const logger = store => next => action => {
  const state = store.getState();
  return next(action);
};

export const middlewares = composeWithDevTools(applyMiddleware());