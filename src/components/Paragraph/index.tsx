import { FC } from "react";
import  { IParagraphProps } from "./types";

import "./styles.scss";

const Paragraph: FC<IParagraphProps> = ({ children }) => <p className="Paragraph">{ children }</p>;

export default Paragraph;
