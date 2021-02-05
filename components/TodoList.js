//react already imported
import ListItem from './ListItem.js';

var TodoList = function TodoList(props) {
  return React.createElement(
    'ul',
    null,
    props.items.map(function (item) {
      return React.createElement(ListItem, { item: item });
    })
  );
};

//render

export default TodoList;