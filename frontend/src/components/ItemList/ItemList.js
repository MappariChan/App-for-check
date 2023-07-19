import ItemListElement from "./ItemListElement";

import classes from "./ItemList.module.css";

const ItemList = ({ items, selectedItems }) => {
  return (
    <ul className={classes.list}>
      {items.map((item) => (
        <ItemListElement
          item={item}
          active={
            selectedItems.filter((sItem) => sItem.id == item.id).length > 0
          }
        />
      ))}
    </ul>
  );
};

export default ItemList;
