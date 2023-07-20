import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import { useDispatch } from "react-redux";

import Counter from "../../UI/Counter";

import classes from "../ItemList/ItemListElement.module.css";
import Avatar from "../Avatar/Avatar";
import Button from "../../UI/Button";

const SubmitItemListElement = ({ item, users }) => {
  const [isOppened, setIsOppened] = useState(false);
  const dispathcer = useDispatch();

  const splitButtonClickHandler = () => {
    dispathcer({ type: "SPLIT_ITEM", item: item });
    setIsOppened(false);
  };

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
          <div>
            <ul>
              {users.map((user) => (
                <li>
                  <Avatar user={user} value={false} />
                </li>
              ))}
            </ul>
            {/* <Button onClick={splitButtonClickHandler}>split</Button> */}
            <button onClick={splitButtonClickHandler}>split</button>
          </div>
        </div>
      </div>

      <div
        className={classes["lower-container"]}
        onClick={() => setIsOppened((prev) => !prev)}
      >
        <p>split with someone</p>
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
