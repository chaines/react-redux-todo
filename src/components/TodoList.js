//react already imported
import ListItem from './ListItem.js';

let TodoList = (props) => {
  return (
    <ul>
      {props.items.map((item) => (<ListItem item={item} />))}
    </ul>
  )
}

//render

export default TodoList;