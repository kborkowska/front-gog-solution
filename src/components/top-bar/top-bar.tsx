import React, { FunctionComponent } from "react";

import GogLogo from "../../icons/logo-classic.png";
import { Cart } from "../cart/cart";
import { MenuButtonGroup } from "../buttons/menu-button-group";

import "./top-bar.css";

export const TopBar: FunctionComponent = () => {
  return (
    <div className="top-bar">
      <div className="content">
        <div className="top-bar-content">
          <img src={GogLogo} alt="gog.com" className="top-bar-icon" />
          <MenuButtonGroup>
            <Cart />
          </MenuButtonGroup>
        </div>
      </div>
    </div>
  );
};
