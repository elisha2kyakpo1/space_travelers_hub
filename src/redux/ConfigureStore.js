import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  // books,
});
const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;
