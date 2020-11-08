import React, { FunctionComponent } from "react";

import { MainContentHeader } from "./main-content-header/main-content-header";
import { MainImg } from "./main-img/main-img";

import "./game-spot.css";

export const GameSpot: FunctionComponent = () => {
  return (
    <div className="main-content-container">
      <div className="main-content">
        <MainContentHeader />
        <MainImg />
      </div>
    </div>
  );
};
