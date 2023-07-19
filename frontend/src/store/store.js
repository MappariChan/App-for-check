import { createStore } from "redux";

const storeReducer = (
  state = { selectedItems: [], splitedItems: [], users: [] },
  action
) => {
  if (action.type == "ADD_ITEM") {
    return {
      selectedItems: [...state.selectedItems, action.item],
      splitedItems: state.splitedItems,
      users: state.users,
    };
  } else if (action.type == "REMOVE_ITEM") {
    return {
      selectedItems: state.selectedItems.filter((item) => item.id != action.id),
      splitedItems: state.splitedItems,
      users: state.users,
    };
  } else if (action.type == "CLEAR") {
    return {
      selectedItems: [],
      splitedItems: [],
      users: [],
    };
  } else if (action.type == "SPLIT_ITEM") {
    return {
      selectedItems: state.selectedItems,
      splitedItems: [
        { item: action.item, users: state.users },
        ...state.splitedItems,
      ],
      users: [],
    };
  } else if (action.type == "ADD_USER_TO_SPLIT") {
    return {
      selectedItems: state.selectedItems,
      splitedItems: state.splitedItems,
      users: [...state.users, action.user],
    };
  } else if (action.type == "REMOVE_USER_FROM_SPLIT") {
    return {
      selectedItems: state.selectedItems,
      splitedItems: state.splitedItems,
      users: state.users.filter((user) => user.id != action.id),
    };
  }
  return {
    selectedItems: state.selectedItems,
    splitedItems: state.splitedItems,
    users: state.users,
  };
};

const store = createStore(storeReducer);

store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});

export default store;
