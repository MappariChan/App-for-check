import classes from "./ItemListElement.module.css";

const ItemListElement = ({ title, price }) => {
  return (
    <li className={classes.item}>
      <h3 className={classes.title}>{title}</h3>
      <p className={classes.price}>{price} $</p>
    </li>
  );
};

export default ItemListElement;
