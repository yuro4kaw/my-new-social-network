import React from "react";

import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css"

function Navbar(props) {
  return (
    <nav className={s.nav}>
      <ul>
        <li>
          <NavLink to="/profile" className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink>
        </li>
        <hr />
        <li>
          <NavLink to="/users" className={navData => navData.isActive ? s.active : s.item}>Users</NavLink>
        </li>
        <hr />
        <li>
          <NavLink to="/dialogs" className={navData => navData.isActive ? s.active : s.item}>Messages</NavLink>
        </li>
        <hr />
        <li>
          <NavLink to="/news" className={navData => navData.isActive ? s.active : s.item}>News</NavLink>
        </li>
        <hr />
        <li>
          <NavLink to="/music" className={navData => navData.isActive ? s.active : s.item}>Music</NavLink>
        </li>
        <hr />
        <li>
          <NavLink to="/settings" className={navData => navData.isActive ? s.active : s.item}>Settings</NavLink>
        </li>
      </ul>

    </nav>
  )
}

export default Navbar;