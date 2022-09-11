import { FC } from "react";
import  { IImageProps } from "./types";

import "./styles.scss";

const Image: FC< IImageProps> = ({
  src, alt, width,
}) => (
  <img
    width={width}
    src={src}
    alt={alt}
    className="Image"
  />
);

export default Image;
