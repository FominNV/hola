import { FC, useMemo, ReactNode } from "react";
import { ReactComponent as Logo } from "assets/icons/header-logo.svg";

import "./styles.scss";
import { dataLinks } from "./data";

const Footer: FC = () => {
  const links = useMemo<ReactNode>(() => (
    dataLinks.map((elem) => (
      <a
        className="Footer__links_link"
        href={elem.path}
      >
        {elem.icon}
      </a>
    ))
  ), []);

  return (
    <div className="Footer">
      <div className="Footer__content">
        <div className="Footer__logo">
          <div className="Footer__logo_icon">
            <Logo />
          </div>
          <div className="Footer__logo_text">© 2000-2022, HOLA S.L.</div>
        </div>

        <div className="Footer__info">
          <div className="Footer__selects">Selects</div>
          <p className="Footer__politic">Política de privacidadConfiguración de privacidadAviso legalCookiesMedia KitContacto</p>
        </div>

        <div className="Footer__links">{links}</div>
      </div>
    </div>
  );
};

export default Footer;
