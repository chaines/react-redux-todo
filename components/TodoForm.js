// import React from 'react';

var TodoForm = function TodoForm(props) {
  return React.createElement(
    "form",
    null,
    React.createElement("input", { type: "text" }),
    React.createElement(
      "button",
      null,
      "Add Item"
    )
  );
};

export default TodoForm;