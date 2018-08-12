// Lets combine all of our refucers.
import { combineReducers } from 'redux';
import mainReducer from './phoneReducers';

export default combineReducers({
  // past an object with the reducers.
  phones: mainReducer
});
