var toggleDone = function toggleDone(_ref) {
  var done = _ref.done;

  return {
    type: "TOGGLE_DONE",
    payload: done
  };
};

export default toggleDone;