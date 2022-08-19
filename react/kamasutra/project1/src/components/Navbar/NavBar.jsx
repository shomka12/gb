import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={s.nav}>
      <div>
        <NavLink className={s.item} to="/profile">
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink className={s.item} to="/dialogs">
          Messages
        </NavLink>
      </div>
      <div>
        <NavLink className={s.item} to="/news">
          News
        </NavLink>
      </div>
      <div>
        <NavLink className={s.item} to="/music">
          Music
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
