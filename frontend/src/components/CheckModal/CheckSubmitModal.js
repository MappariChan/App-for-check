import { useSelector } from "react-redux";
import Button from "../../UI/Button";
import SubmitItemList from "../SubmitItemList/SubmitItemList";

import classes from "./CheckModal.module.css";

const CheckSubmitModal = ({ close, title, prev }) => {
  const selectedItems = useSelector((state) => state.selectedItems);

  return (
    <div className={classes.modal}>
      <header className={classes["modal-header"]}>
        <h2 className={classes.title}>{title}</h2>
      </header>
      <p>Choose amount</p>
      <SubmitItemList selectedItems={selectedItems} />
      <div className={classes.actions}>
        <Button onClick={prev}>Back</Button>
        <Button onClick={close}>Next</Button>
      </div>
    </div>
  );
};

export default CheckSubmitModal;
