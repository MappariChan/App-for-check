import classes from "./Avatar.module.css";

const SimpleAvatar = ({ user }) => {
  return <div className={classes["simple-avatar"]} title={user.username}></div>;
};

export default SimpleAvatar;
