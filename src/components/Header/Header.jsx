import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import logo from "../../assets/img/logo.png"

function Header(props) {
  return (
    <header className={s.header}>
      <img
        src={logo}
        alt="logo"
        className={s.logo}
      />
      <div className={s.loginBlock}>
        {props.isAuth
          ? <div> {props.login} - <button className={s.logoutButton} onClick={props.logout}>Logout</button> </div>
          : <NavLink to="/login">Login</NavLink>}


      </div>
    </header>
  )
}

export default Header;