import TodoList from '../components/TodoList.js';
// import { connect } from 'react-redux';
let connect = ReactRedux.connect //J A N K Y S H ! T

let mapStateToProps = (store) => {
  return {
    items: store.items
  }
}
let TodoListContainer = connect(mapStateToProps, null)(TodoList);


export default TodoListContainer;
// OH NO