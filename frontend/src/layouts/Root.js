import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation/MainNavigation";

import classes from "./Root.module.css";

const Root = () => {
  return (
    <>
      <MainNavigation />
      <main className={classes["main-content"]}>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
