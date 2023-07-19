import { useSelector } from "react-redux";

import ItemList from "../ItemList/ItemList";
import Button from "../../UI/Button";

import classes from "./CheckModal.module.css";

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
        <Button onClick={next}>Next</Button>
      </div>
    </div>
  );
};

export default CheckModal;
