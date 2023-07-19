import { useState } from "react";
import { FaRegBookmark } from "react-icons/fa";

import classes from "./ItemListElement.module.css";
import { useDispatch } from "react-redux";

const ItemListElement = ({ item, active }) => {
  const [isActive, setIsActive] = useState(active);
  const dispathcer = useDispatch();

  const chooseItemHandler = () => {
    setIsActive((prev) => {
      if (!prev) {
        dispathcer({ type: "ADD_ITEM", item: item });
      } else {
        dispathcer({ type: "REMOVE_ITEM", id: item.id });
      }
      return !prev;
    });
  };

  return (
    <li className={classes.item} onClick={chooseItemHandler}>
      <div>
        <h3 className={classes.title}>{item.title}</h3>
        <p className={classes.price}>{item.price} $</p>
      </div>
      <div className={`${classes.circle} ${isActive ? classes.active : ""}`}>
        <FaRegBookmark color={isActive ? "#ede9fe" : "#6638dd"} />
      </div>
    </li>
  );
};

export default ItemListElement;
