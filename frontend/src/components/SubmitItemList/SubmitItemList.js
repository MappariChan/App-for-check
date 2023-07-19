import SubmitItemListElement from "./SubmitItemListElement";

import classes from "../ItemList/ItemList.module.css";
import SubmitItemListSplitedElement from "./SubmitItemListSplitedElement";

const users = [
  { username: "mappari", id: 0 },
  { username: "maffusailo", id: 1 },
  { username: "pancake", id: 2 },
];

const SubmitItemList = ({ allItems }) => {
  return (
    <ul className={classes.list}>
      {allItems.map((item) => {
        if (item.users) {
          return (
            <SubmitItemListSplitedElement item={item.item} users={item.users} />
          );
        } else {
          return <SubmitItemListElement item={item} users={users} />;
        }
      })}
    </ul>
  );
};

export default SubmitItemList;
