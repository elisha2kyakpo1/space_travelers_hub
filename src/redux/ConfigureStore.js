import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { rocketReducer } from './rockets/Rockets';

const reducer = combineReducers({
  rocketReducer,
});
const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;
