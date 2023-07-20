import { useSelector } from "react-redux";

import ItemList from "../ItemList/ItemList";

import classes from "./CheckModal.module.css";
import MuiButton from "../../UI/MuiButton";

const CheckModal = ({ close, title, items, next }) => {
  const selectedItems = useSelector((state) => state.selectedItems);

  return (
    <div className={classes.modal}>
      <header className={classes["modal-header"]}>
        <h2 className={classes.title}>{title}</h2>
      </header>
      <p>Please select items</p>
      <ItemList items={items} selectedItems={selectedItems} />
      <div className={classes.actions}>
        <MuiButton onClick={next} accentColor = "#6638dd" type = "submit">Next</MuiButton>
      </div>
    </div>
  );
};

export default CheckModal;
