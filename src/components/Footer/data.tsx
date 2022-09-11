import { ReactComponent as Facebook } from "assets/icons/facebook.svg";
import { ReactComponent as Twitter } from "assets/icons/twitter.svg";
import { ReactComponent as Instagram } from "assets/icons/instagram.svg";
import { ReactComponent as Pinterest } from "assets/icons/pinterest.svg";
import { ILink } from "./types";

export const dataLinks: ILink[] = [
  {
    path: "https://www.facebook.com/pages/HOLA-USA/288444131299841",
    icon: <Facebook />,
  },
  {
    path: "https://twitter.com/usahola",
    icon: <Twitter />,
  },
  {
    path: "https://www.instagram.com/holausa/",
    icon: <Instagram />,
  },
  {
    path: "https://www.pinterest.com/usahola/",
    icon: <Pinterest />,
  },
];
