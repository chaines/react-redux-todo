//import React from 'react' (is already imported)
import TodoListContainer from '../containers/TodoListContainer.js';
import TodoForm from './TodoForm.js';
/**
 * App
 *  |- TodoList
 *      |- ListItems
 *  |- TodoForm
 */
//P!NK

var App = function App(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Todo List'
    ),
    React.createElement(TodoListContainer, null),
    React.createElement(TodoForm, null)
  );
};

export default App;

/**
 * state
 * -----
 *  {
 *    items: [{name: 'Get Groceries', done: false}, {name: 'Review React', done: false}, {name: 'Learn Redux', done: false}]
 *  }
 *
 * addItem
 * toggleDone
 * clearDoneItems
 *
 */