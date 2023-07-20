import { createStore } from "redux";

const storeReducer = (
  state = { selectedItems: [], splitedItems: [], usersOfItems: [] },
  action
) => {
  if (action.type == "ADD_ITEM") {
    return {
      selectedItems: [...state.selectedItems, action.item],
      splitedItems: state.splitedItems,
      usersOfItems: state.usersOfItems,
    };
  } else if (action.type == "REMOVE_ITEM") {
    return {
      selectedItems: state.selectedItems.filter((item) => item.id != action.id),
      splitedItems: state.splitedItems,
      usersOfItems: state.usersOfItems,
    };
  } else if (action.type == "CLEAR") {
    return {
      selectedItems: [],
      splitedItems: [],
      usersOfItems: [],
    };
  } else if (action.type == "SPLIT_ITEM") {
    const usersOfItem = state.usersOfItems.filter(
      (el) => el.itemId == action.item.id
    )[0];
    const newUsersOfItems = state.usersOfItems.filter(
      (el) => el.itemId != action.item.id
    );

    return {
      selectedItems: state.selectedItems,
      splitedItems: [
        { item: action.item, usersOfItem: usersOfItem.users },
        ...state.splitedItems,
      ],
      usersOfItems: newUsersOfItems,
    };
  } else if (action.type == "ADD_USER_TO_SPLIT") {
    const exist =
      state.usersOfItems.filter((el) => el.itemId == action.itemId).length > 0;
    let result = state.usersOfItems;
    if (exist) {
      const element = result.filter((el) => el.itemId == action.itemId)[0];
      const index = result.indexOf(element);
      result[index].users.push(action.user);
    } else {
      result.push({ itemId: action.itemId, users: [action.user] });
    }
    return {
      selectedItems: state.selectedItems,
      splitedItems: state.splitedItems,
      usersOfItems: result,
    };
  } else if (action.type == "REMOVE_USER_FROM_SPLIT") {
    let result = state.usersOfItems;
    const item = result.filter((el) => el.itemId == action.itemId)[0];
    const index = result.indexOf(item);
    item.users = item.users.filter((user) => user.id != action.userId);
    if (item.users.length > 0) {
      result[index] = item;
    } else {
      result = result.filter((el) => el.itemId != item.itemId);
    }
    return {
      selectedItems: state.selectedItems,
      splitedItems: state.splitedItems,
      usersOfItems: result,
    };
  }
  return {
    selectedItems: state.selectedItems,
    splitedItems: state.splitedItems,
    usersOfItems: state.usersOfItems,
  };
};

const store = createStore(storeReducer);

store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});

export default store;
