import ItemList from "../ItemList/ItemList";
import Button from "../../UI/Button";

import classes from "./CheckModal.module.css";

const CheckModal = ({ close, title, items }) => {
  return (
    <div className={classes.modal}>
      <header className={classes["modal-header"]}>
        <h2 className={classes.title}>{title}</h2>
      </header>
      <p>Please select items</p>
      <ItemList items={items} />
      <div className={classes.actions}>
        <Button>Next</Button>
      </div>
    </div>
  );
};

export default CheckModal;
