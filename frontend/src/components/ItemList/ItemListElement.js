import { useState } from "react";
import { FaRegBookmark } from "react-icons/fa";

import classes from "./ItemListElement.module.css";

const ItemListElement = ({ title, price }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <li
      className={classes.item}
      onClick={() => {
        setIsActive((prev) => !prev);
      }}
    >
      <div>
        <h3 className={classes.title}>{title}</h3>
        <p className={classes.price}>{price} $</p>
      </div>
      <div className={`${classes.circle} ${isActive ? classes.active : ""}`}>
        <FaRegBookmark color={isActive ? "#ede9fe" : "#6638dd"} />
      </div>
    </li>
  );
};

export default ItemListElement;
