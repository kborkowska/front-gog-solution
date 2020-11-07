import React, { FunctionComponent } from "react";

import GogLogo from "../../icons/gog-logo.png";
import { Cart } from "../cart/cart";

import "./top-bar.css";

export const TopBar: FunctionComponent = () => {
  return (
    <div className="top-bar">
      <div className="content">
        <div className="top-bar-content">
          <img src={GogLogo} alt="gog.com" className="top-bar-icon" />
          <Cart />
        </div>
      </div>
    </div>
  );
};
