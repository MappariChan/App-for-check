import classes from "./Backdrop.module.css";

const Backdrop = ({ close }) => {
  return <div onClick={close} className={classes.backdrop}></div>;
};

export default Backdrop;
