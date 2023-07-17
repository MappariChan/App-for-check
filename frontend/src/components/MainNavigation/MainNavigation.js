import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes["main-navigation"]}>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              Checks
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/group"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              Group
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
