import {NavLink} from "react-router-dom";

import classes from "./MainNavigation.module.css";
import ReactDOM from "react-dom";
import {useState} from "react";
import ModalSwitcher from "../RegistrationModals/ModalSwitcher";

const MainNavigation = () => {
    const [isModal, setIsModal] = useState(false)
    const openModalHandler = () => {
        setIsModal(true)
    }
    const closeModalHandler = () => {
        setIsModal(false)
    }

    return (
        <header className={classes["main-navigation"]}>
            {isModal && ReactDOM.createPortal(<ModalSwitcher
                onClose={closeModalHandler}/>, document.getElementById('modal'))}
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={({isActive}) => (isActive ? classes.active : "")}
                        >
                            Checks
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/group"
                            className={({isActive}) => (isActive ? classes.active : "")}
                        >
                            Group
                        </NavLink>
                    </li>
                    <li>
                        <NavLink onClick={openModalHandler}>
                          Sign In
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;
