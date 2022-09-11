import {
  FC, MouseEvent, useCallback, useState,
} from "react";
import { Helmet } from "react-helmet-async";
import Header from "components/Header";
import Footer from "components/Footer";
import PopupMenu from "components/PopupMenu";
import classNames from "classnames";
import { IMainLayoutProps } from "./types";

import "./styles.scss";

const MainLayout: FC<IMainLayoutProps> = ({ children, pageTitle }) => {
  const [showPopupMenu, setShowPopupMenu] = useState<boolean>(false);

  const openPopupMenu = useCallback<EventFunc<MouseEvent>>(() => {
    setShowPopupMenu(true);

    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = "hidden";
    }
  }, []);

  const closePopupMenu = useCallback<EventFunc<MouseEvent>>(() => {
    setShowPopupMenu(false);

    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = "auto";
    }
  }, []);

  const layoutClassName = classNames("MainLayout", {
    MainLayout_hidden: showPopupMenu,
  });

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>

      <div className={layoutClassName}>
        <PopupMenu
          active={showPopupMenu}
          closePopupMenu={closePopupMenu}
        />
        <Header openPopupMenu={openPopupMenu} />
        <div className="MainLayout__children">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
