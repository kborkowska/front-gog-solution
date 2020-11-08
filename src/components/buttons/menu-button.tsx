import React, { FunctionComponent } from "react";

import { GenericButton, GenericButtonProps } from "./generic-button";

import "./buttons.css";

interface MenuButtonProps extends GenericButtonProps {
  active: boolean;
}

export const MenuButton: FunctionComponent<MenuButtonProps> = ({
  active,
  ...props
}) => {
  const className = `menu-button ${active ? "menu-button-active" : ""} ${
    props.className
  }`;

  return (
    <div className="separator-horizontal separator-horizontal-menu">
      <GenericButton {...props} className={className} />
    </div>
  );
};
