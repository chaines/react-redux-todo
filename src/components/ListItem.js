//implied import react

let ListItem = ({ item }) => {
  return (
    <li style={{ 'textDecoration': ((item.done) ? 'line-through' : 'inherit') }}>{item.name}</li>
  )
}

export default ListItem;

