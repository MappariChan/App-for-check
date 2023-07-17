import CheckListItem from "./CheckListItem";

import classes from "./CheckList.module.css";

const CheckList = ({ checks }) => {
  return (
    <ul className={classes["check-list"]}>
      {checks.map((check) => (
        <CheckListItem check={check} />
      ))}
    </ul>
  );
};

export default CheckList;
