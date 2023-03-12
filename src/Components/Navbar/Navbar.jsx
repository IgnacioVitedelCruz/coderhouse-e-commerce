import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import style from "./Navbar.module.css";
import NavbarList from "./NavbarList";

const Navbar = ({ children }) => {
  return (
    <header className={style.headerPrincipal}>
      <div className={style.container}>
        <h1 className={style.headerPrincipalTitulo}>
          <a href="/#" style={{ fontFamily: "Tilt Warp" }}>
            DESIGN VITTES
          </a>
        </h1>
        <NavbarList />
        <CartWidget />
      </div>
      {children}
    </header>
  );
};

export default Navbar;
