import { FC } from "react";
import  { ISubscriptionProps } from "./types";

import "./styles.scss";

const Subscription: FC<ISubscriptionProps> = ({ children }) => <div className="Subscription">{ children }</div>;

export default Subscription;
