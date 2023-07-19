import { createStore } from "redux";

const storeReducer = (state = { selectedItems: [] }, action) => {
  if (action.type == "ADD_ITEM") {
    return {
      selectedItems: [...state.selectedItems, action.item],
    };
  } else if (action.type == "REMOVE_ITEM") {
    return {
      selectedItems: state.selectedItems.filter((item) => item.id != action.id),
    };
  } else if (action.type == "CLEAR") {
    return {
      selectedItems: [],
    };
  }
  return {
    selectedItems: state.selectedItems,
  };
};

const store = createStore(storeReducer);

export default store;
