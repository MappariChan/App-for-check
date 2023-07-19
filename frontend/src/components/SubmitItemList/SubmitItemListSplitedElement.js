import Counter from "../../UI/Counter";
import SimpleAvatar from "../Avatar/SimpleAvatar";

import classes from "../ItemList/ItemListElement.module.css";

const SubmitItemListSplitedElement = ({ users, item }) => {
  return (
    <li className={classes.item + " " + classes["split-item"]}>
      <div>
        <h3 className={classes.title}>{item.title}</h3>
        <div className={classes["list-of-splited-users"]}>
          <span>splited with:</span>
          <ul>
            {users.map((user) => (
              <li>
                <SimpleAvatar user={user} />
              </li>
            ))}
          </ul>
        </div>
        <p className={classes.price}>{item.price} $</p>
      </div>
      <Counter value={1} />
    </li>
  );
};

export default SubmitItemListSplitedElement;
