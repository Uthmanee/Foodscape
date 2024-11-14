export default deleteSelectedItemReducer = (state, action) => {
  const itemIdArray = action.payload;

  itemIdArray.forEach((id) => {
    state.items = state.items.filter((item) => item.id !== id);
  });
  state.changed = true;
  state.notification = `${itemIdArray.length} item${
    itemIdArray.length > 1 ? "s" : ""
  } deleted`;
};
