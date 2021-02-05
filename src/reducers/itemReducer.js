
let defaultItemList = [
  {
    name: "Get Groceries",
    done: false
  },
  {
    name: "Review React",
    done: true
  }
];

let itemReducer = (previousItemList = defaultItemList, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...previousItemList, { name: action.payload, done: false }];
    case "TOGGLE_DONE":
      //go into previousItemList array and search for which {name: action.payload.name, done: action.payload.done}
      // make a copy of previousItemList
      let newItemList = previousItemList.slice();
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