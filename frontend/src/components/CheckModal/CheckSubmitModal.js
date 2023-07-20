import { useSelector } from "react-redux";
import SubmitItemList from "../SubmitItemList/SubmitItemList";

import classes from "./CheckModal.module.css";
import MuiButton from "../../UI/MuiButton";

const CheckSubmitModal = ({ close, title, prev }) => {
  const selectedItems = useSelector((state) => state.selectedItems);
  const splitedItems = useSelector((state) => state.splitedItems);
  const allItems = [...selectedItems, ...splitedItems];

  return (
    <div className={classes.modal}>
      <header className={classes["modal-header"]}>
        <h2 className={classes.title}>{title}</h2>
      </header>
      <p>Choose amount</p>
      <SubmitItemList allItems={allItems} />
      <div className={classes.actions}>
        <MuiButton onClick={prev} accentColor = "#6638dd" type = "submit">Back</MuiButton>
        <MuiButton onClick={close} accentColor = "#6638dd" type = "submit">Next</MuiButton>
      </div>
    </div>
  );
};

export default CheckSubmitModal;
