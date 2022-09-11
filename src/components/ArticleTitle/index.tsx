import { FC } from "react";
import  { IArticleTitleProps } from "./types";

import "./styles.scss";

const ArticleTitle: FC< IArticleTitleProps> = ({ title, text, image }) => (
  <div className="ArticleTitle">
    <div className="ArticleTitle__text-block">
      <div className="ArticleTitle__logo">
        <p className="ArticleTitle__logo_text">ENTREVISTA HOLA! USA</p>
      </div>
      <p className="ArticleTitle__title">{title}</p>
      <p className="ArticleTitle__text">{text}</p>
    </div>

    <img
      className="ArticleTitle__image"
      src={image}
      alt="lady"
    />
  </div>
);

export default ArticleTitle;
