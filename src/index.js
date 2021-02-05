import App from './components/App.js';
import rootReducer from './reducers/main.js';

// import {createStore} from 'redux';
let createStore = Redux.createStore//=>Janky sh!t

let store = createStore(rootReducer);



ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <App />
  </ReactRedux.Provider>,
  document.getElementById('root'));

/**
 * const store = createStore(
  rootReducer,
  applyMiddlware(thunkMiddleware)
);
 */