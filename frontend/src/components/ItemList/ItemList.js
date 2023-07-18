import ItemListElement from "./ItemListElement";

import classes from "./ItemList.module.css";

const ItemList = ({ items }) => {
  return (
    <ul className={classes.list}>
      {items.map((item) => (
        <ItemListElement {...item} />
      ))}
    </ul>
  );
};

export default ItemList;
