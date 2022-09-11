import { MouseEvent } from "react";

export interface IPopupMenuProps {
  active: boolean
  closePopupMenu: EventFunc<MouseEvent>
}
