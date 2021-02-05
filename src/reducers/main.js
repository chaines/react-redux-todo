import itemReducer from './itemReducer.js';
// import { combineReducers } from 'redux';
let combineReducers = Redux.combineReducers; //J4nky A$$ Sh!t

let rootReducer = combineReducers({
  items: itemReducer
});

export default rootReducer;

