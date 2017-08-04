import { combineReducers } from 'redux'
import movieReducer from './move'

const rootReducer = combineReducers({
  movie: movieReducer;
});

export default rootReducer;