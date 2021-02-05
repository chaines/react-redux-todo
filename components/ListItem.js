//implied import react

var ListItem = function ListItem(_ref) {
  var item = _ref.item;

  return React.createElement(
    'li',
    { style: { 'textDecoration': item.done ? 'line-through' : 'inherit' } },
    item.name
  );
};

export default ListItem;