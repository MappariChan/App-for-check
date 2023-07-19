import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";

import CheckSubmitModal from "../CheckModal/CheckSubmitModal";
import CheckModal from "../CheckModal/CheckModal";
import Backdrop from "../../UI/Backdrop";

import classes from "./CheckListItem.module.css";

const CheckListItem = ({ check }) => {
  const [modalStage, setModalStage] = useState(0);
  const dispathcer = useDispatch();

  const close = () => {
    dispathcer({ type: "CLEAR" });
    setModalStage(0);
  };

  const prev = () => {
    setModalStage((prev) => prev - 1);
  };

  const next = () => {
    setModalStage((prev) => prev + 1);
  };

  return (
    <li className={classes.check}>
      <div
        className={classes.cover}
        onClick={() => {
          setModalStage(1);
        }}
      ></div>
      {modalStage == 1 &&
        ReactDOM.createPortal(
          <>
            <Backdrop close={close} />
            <CheckModal
              close={close}
              items={check.items}
              title={check.title}
              next={next}
            />
          </>,
          document.getElementById("modal")
        )}
      {modalStage == 2 &&
        ReactDOM.createPortal(
          <>
            <Backdrop close={close} />
            <CheckSubmitModal close={close} title={check.title} prev={prev} />
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
