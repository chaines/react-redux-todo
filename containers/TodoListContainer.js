import TodoList from '../components/TodoList.js';
// import { connect } from 'react-redux';
var connect = ReactRedux.connect; //J A N K Y S H ! T

var mapStateToProps = function mapStateToProps(store) {
  return {
    items: store.items
  };
};
var TodoListContainer = connect(mapStateToProps, null)(TodoList);

export default TodoListContainer;
// OH NO