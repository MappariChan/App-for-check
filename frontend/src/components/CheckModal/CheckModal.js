import classes from "./CheckModal.module.css";

const CheckModal = ({ close }) => {
  return <div onClick={close} className={classes.modal}></div>;
};

export default CheckModal;
