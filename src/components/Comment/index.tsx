import { FC, ReactNode, useMemo } from "react";
import  { ICommentProps } from "./types";

import "./styles.scss";

const Comment: FC<ICommentProps> = ({
  avatar, date, name, text, photo,
}) => {
  const image = useMemo<ReactNode>(() => {
    if (photo) {
      return (
        <img
          src={photo}
          alt="comment"
          className="Comment__image"
        />
      );
    } return undefined;
  }, [photo]);

  return (
    <div className="Comment">
      <img
        src={avatar}
        alt="avatar"
        className="Comment__avatar"
      />
      <div className="Comment__content">
        <p className="Comment__date">{date}</p>
        <p className="Comment__name">{name}</p>
        <p className="Comment__text">{text}</p>
        {image}
      </div>
    </div>
  );
};

export default Comment;
