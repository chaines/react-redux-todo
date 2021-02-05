let toggleDone = ({ done }) => {
  return {
    type: "TOGGLE_DONE",
    payload: done
  };
};

export default toggleDone;