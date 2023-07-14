import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes["main-navigation"]}>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/checks">Checks</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
