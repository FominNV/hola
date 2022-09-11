import { FC } from "react";
import  { IH2Props } from "./types";

import "./styles.scss";

const H2: FC<IH2Props> = ({ children }) => <h2 className="H2">{ children }</h2>;

export default H2;
