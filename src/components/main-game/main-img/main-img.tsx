import React, { FunctionComponent } from "react";

import { GenericButton } from "../../generic-button/generic-button";
import { Headers } from "../../../consts";

import MainGameImg from "../../../games/witcher.png";

export const MainImg: FunctionComponent = () => {
  return (
    <div className="main-game-img-container">
      <GenericButton className="hidden-button">
        {Headers.HiddenButton}
      </GenericButton>
      <img src={MainGameImg} alt="main game" className="main-game-img" />
    </div>
  );
};
