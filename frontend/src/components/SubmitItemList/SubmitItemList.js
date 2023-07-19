import SubmitItemListElement from "./SubmitItemListElement";

import classes from "../ItemList/ItemList.module.css";

const users = [
  { username: "mappari" },
  { username: "maffusailo" },
  { username: "pancake" },
];

const SubmitItemList = ({ selectedItems }) => {
  return (
    <ul className={classes.list}>
      {selectedItems.map((item) => (
        <SubmitItemListElement item={item} users={users} />
      ))}
    </ul>
  );
};

export default SubmitItemList;
