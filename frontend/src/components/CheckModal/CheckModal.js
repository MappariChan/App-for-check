import classes from "./CheckModal.module.css";

const CheckModal = ({ close, checkTitle, checkNumber }) => {
  return <div onClick={close} className={classes.modal}>
    <h2>{checkTitle}</h2>
    <p>{checkNumber}</p>
  </div>;
};

export default CheckModal;
