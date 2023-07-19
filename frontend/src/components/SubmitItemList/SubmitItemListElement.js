import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";

import Counter from "../../UI/Counter";

import classes from "../ItemList/ItemListElement.module.css";
import Avatar from "../Avatar/Avatar";

const SubmitItemListElement = ({ item, users }) => {
  const [isOppened, setIsOppened] = useState(false);

  return (
    <li className={classes.item + " " + classes["submit-item"]}>
      <div className={classes["higher-container"]}>
        <div>
          <h3 className={classes.title}>{item.title}</h3>
          <p className={classes.price}>{item.price} $</p>
        </div>
        <Counter />
      </div>
      <div
        className={`${classes["list-of-users"]} ${
          isOppened ? classes["oppened-list-of-users"] : ""
        }`}
      >
        <div>
          <ul>
            {users.map((user) => (
              <li>
                <Avatar username={user.username} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={classes["lower-container"]}
        onClick={() => setIsOppened((prev) => !prev)}
      >
        <p>spilt with someone</p>
        <MdKeyboardArrowDown
          className={`${classes["oc-arrow"]} ${
            isOppened ? classes["oppened-arrow"] : ""
          }`}
        />
      </div>
    </li>
  );
};

export default SubmitItemListElement;
