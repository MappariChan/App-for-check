import { useState } from "react";
import ReactDOM from "react-dom";

import CheckModal from "../CheckModal/CheckModal";
import Backdrop from "../../UI/Backdrop";

import classes from "./CheckListItem.module.css";

const CheckListItem = ({ check }) => {
  const [isShown, setIsShown] = useState(false);

  const close = () => {
    console.log("triggered");
    setIsShown(false);
  };

  return (
    <li
      className={classes.check}
      onClick={() => {
        setIsShown(true);
      }}
    >
      {isShown &&
        ReactDOM.createPortal(
          <>
            <Backdrop close={close} />
            <CheckModal />
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
