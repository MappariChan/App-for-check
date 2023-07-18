import React, { useState } from "react";
import ReactDOM from "react-dom";

import CheckModal from "../CheckModal/CheckModal";
import Backdrop from "../../UI/Backdrop";

import classes from "./CheckListItem.module.css";

const CheckListItem = ({ check }) => {
  const [isShown, setIsShown] = useState(false);

  const close = () => {
    setIsShown(false);
  };

  return (
    <li className={classes.check}>
      <div
        className={classes.cover}
        onClick={() => {
          setIsShown(true);
        }}
      ></div>
      {isShown &&
        ReactDOM.createPortal(
          <>
            <Backdrop close={close} />
            <CheckModal close={close} items={check.items} title={check.title} />
          </>,
          document.getElementById("modal")
        )}
      <h3 className={classes.title}>{check.title}</h3>
      <p className={classes.price}>{check.price} $</p>
      <p className={classes.desc}>{check.desc}</p>
    </li>
  );
};

export default CheckListItem;
