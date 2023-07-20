import { useState } from "react";
import { useDispatch } from "react-redux";

import classes from "./Avatar.module.css";

const Avatar = ({ user, value, itemId }) => {
  const [isSelected, setIsSelected] = useState(value);
  const dispatcher = useDispatch();

  const selectHandler = () => {
    setIsSelected((prev) => {
      if (!prev) {
        dispatcher({ type: "ADD_USER_TO_SPLIT", user: user, itemId: itemId });
      } else {
        dispatcher({
          type: "REMOVE_USER_FROM_SPLIT",
          userId: user.id,
          itemId: itemId,
        });
      }
      return !prev;
    });
  };

  return (
    <div className={classes.container} onClick={selectHandler}>
      <div
        className={classes.avatar + " " + (isSelected ? classes.selected : "")}
      ></div>
      {user.username.length > 7 && (
        <span title={user.username} className={classes.username}>
          {user.username.substring(0, 4) + "..."}
        </span>
      )}
      {user.username.length <= 7 && (
        <span className={classes.username}>{user.username}</span>
      )}
    </div>
  );
};

export default Avatar;
