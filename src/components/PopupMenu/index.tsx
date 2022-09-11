import { FC, useMemo } from "react";
import classNames from "classnames";
import { ReactComponent as Logo } from "assets/icons/header-logo.svg";
import { ReactComponent as Close } from "assets/icons/close.svg";
import  { IPopupMenuProps } from "./types";

import "./styles.scss";
import { dataLinks } from "./data";

const PopupMenu: FC<IPopupMenuProps> = ({ active, closePopupMenu }) => {
  const links = useMemo(() => (
    dataLinks.map((elem) => (
      <a
        className="PopupMenu__link"
        href="https://www.hola.com/us-es"
      >
        {elem}
      </a>
    ))
  ), []);

  const backgroundClassName = classNames("PopupMenu__background", {
    PopupMenu__background_active: active,
  });

  const popupClassName = classNames("PopupMenu", {
    PopupMenu_active: active,
  });

  return (
    <div className={popupClassName}>
      <div className="PopupMenu__content">
        <div className="PopupMenu__header">
          <div className="PopupMenu__logo">
            <Logo />
          </div>
          <button
            className="PopupMenu__button-close"
            onClick={closePopupMenu}
          >
            <Close />
          </button>
        </div>

        <div className="PopupMenu__buscar">
          <p className="PopupMenu__buscar_text">BUSCAR</p>
        </div>

        <div className="PopupMenu__links">{links}</div>
      </div>

      <div className={backgroundClassName} />
    </div>
  );
};

export default PopupMenu;
