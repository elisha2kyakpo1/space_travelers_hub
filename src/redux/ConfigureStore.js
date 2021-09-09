import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionsReducer from './missions/reducers/MissionsReducers';
import { rocketReducer } from './rockets/Rockets';

const reducer = combineReducers({
  missions: missionsReducer,
  rocketReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);
export default store;
