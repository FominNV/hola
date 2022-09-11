import { FC } from "react";
import { ReactComponent as Logo } from "assets/icons/header-logo.svg";
import { ReactComponent as Menu } from "assets/icons/menu-large-screen.svg";

import "./styles.scss";
import { IHeaderProps } from "./types";

const Header: FC<IHeaderProps> = ({ openPopupMenu }) => (
  <div className="Header">
    <div className="Header__content">
      <a
        className="Header__logo"
        href="https://www.hola.com/us-es/"
      >
        <Logo />
      </a>

      <div className="Header__links">
        <a
          className="Header__link-hi"
          href="https://www.hola.com/us-es/"
        >
          ¡H!
        </a>
        <span className="Header__text">/</span>
        <a
          className="Header__link-beleza"
          href="https://www.hola.com/us-es/salud-y-belleza/"
        >
          BELLEZA
        </a>
      </div>

      <button
        className="Header__menu-button"
        onClick={openPopupMenu}
      >
        <div className="Header__menu-icon">
          <Menu />
        </div>
      </button>
    </div>
  </div>
);

export default Header;
