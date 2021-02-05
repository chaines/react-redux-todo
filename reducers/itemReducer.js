function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var defaultItemList = [{
  name: "Get Groceries",
  done: false
}, {
  name: "Review React",
  done: true
}];

var itemReducer = function itemReducer() {
  var previousItemList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultItemList;
  var action = arguments[1];

  switch (action.type) {
    case "ADD_ITEM":
      return [].concat(_toConsumableArray(previousItemList), [{ name: action.payload, done: false }]);
    case "TOGGLE_DONE":
      //go into previousItemList array and search for which {name: action.payload.name, done: action.payload.done}
      // make a copy of previousItemList
      var newItemList = previousItemList.slice();
      // loop through until we find an item with the same name
      for (var i = 0; i < newItemList.length; i++) {
        if (newItemList[i].name === action.payload.name) {
          // that item.done = !action.payload.done
          newItemList[i].done = !newItemList[i].done;
          // return the copy
          return newItemList;
        }
      }
      return previousItemList;
    default:
      return previousItemList;
  }
};

export default itemReducer;