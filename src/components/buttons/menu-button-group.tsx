import React, { FunctionComponent, ReactElement } from "react";

import "./buttons.css";

interface MenuButtonGroupProps {
  children: ReactElement | ReactElement[];
}

export const MenuButtonGroup: FunctionComponent<MenuButtonGroupProps> = (
  props
) => {
  return (
    <div className="separator-horizontal separator-horizontal-menu">
      {props.children}
    </div>
  );
};
