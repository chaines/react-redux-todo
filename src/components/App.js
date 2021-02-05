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

let App = (props) => {
  return (
    <div>
      <h1>Todo List</h1>
      <TodoListContainer />
      <TodoForm />
    </div>
  );
}

export default App

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