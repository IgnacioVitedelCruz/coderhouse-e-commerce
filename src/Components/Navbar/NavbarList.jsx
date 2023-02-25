import React, { Fragment } from "react";
import style from "./Navbar.module.css";

const NavbarList = () => {
  return (
    <Fragment>
      <nav className={style.headerPrincipalNav}>
        <a className={style.headerPrincipalNavLink} href="/#">
          Home
        </a>
        <a className={style.headerPrincipalNavLink} href="/#">
          Rebajas
        </a>
        <a className={style.headerPrincipalNavLink} href="/#">
          Sobre Nosotros
        </a>
        <a className={style.headerPrincipalNavLink} href="/#">
          Contactos
        </a>
        <a className={style.headerPrincipalNavLink} href="/#">
          Nuestra APP
        </a>
      </nav>
    </Fragment>
  );
};

export default NavbarList;
