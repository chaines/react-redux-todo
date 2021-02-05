var addItem = function addItem(itemName) {
  return {
    type: "ADD_ITEM",
    payload: itemName
  };
};

export default addItem;