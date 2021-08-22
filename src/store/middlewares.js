/* eslint-disable no-unused-vars */
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const logger = store => next => action => {
  const state = store.getState();
  return next(action);
};

const thunk = store => next => action => {
  const { dispatch, getState } = store;

  if (typeof action === 'function') {
    return action(dispatch, getState);
  }

  return next(action);
};

export const middlewares = composeWithDevTools(applyMiddleware(logger, thunk));
