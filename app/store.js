import { createStore, applyMiddleware } from 'redux';
import rootReducers from 'reducers/root';
import logMiddleware from 'middleware/log';
import apiMiddleware from 'middleware/api';

export default createStore(
  rootReducers,
  applyMiddleware(logMiddleware, apiMiddleware)
);
