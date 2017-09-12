import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  greeting: (state = {}) => {return "Welcome to Redux!"}
});

export default rootReducer;
