import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { rocketReducer } from './rockets/Rockets';
import missionReducer from './missions/reducers/missionsReducers';

const reducer = combineReducers({
  missions: missionReducer,
  rocketReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
