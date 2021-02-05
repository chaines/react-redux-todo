import App from './components/App.js';
import rootReducer from './reducers/main.js';

// import {createStore} from 'redux';
var createStore = Redux.createStore; //=>Janky sh!t

var store = createStore(rootReducer);

ReactDOM.render(React.createElement(
  ReactRedux.Provider,
  { store: store },
  React.createElement(App, null)
), document.getElementById('root'));

/**
 * const store = createStore(
  rootReducer,
  applyMiddlware(thunkMiddleware)
);
 */