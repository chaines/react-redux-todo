import itemReducer from './itemReducer.js';
// import { combineReducers } from 'redux';
var combineReducers = Redux.combineReducers; //J4nky A$$ Sh!t

var rootReducer = combineReducers({
  items: itemReducer
});

export default rootReducer;