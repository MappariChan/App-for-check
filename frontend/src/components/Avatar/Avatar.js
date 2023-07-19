import classes from "./Avatar.module.css";

const Avatar = ({ username }) => {
  return (
    <div className={classes.container}>
      <div className={classes.avatar}></div>
      <span className={classes.username}>
        {username.length > 7 ? username.substring(0, 4) + "..." : username}
      </span>
    </div>
  );
};

export default Avatar;
