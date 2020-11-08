import React, { FunctionComponent } from "react";

import { GenericButton } from "../../generic-button/generic-button";
import { Headers } from "../../../consts";

import GameSpotImg from "../../../games/witcher.png";

export const MainImg: FunctionComponent = () => {
  return (
    <div className="game-spot-img-container">
      <GenericButton className="hidden-button">
        {Headers.HiddenButton}
      </GenericButton>
      <img src={GameSpotImg} alt="main game" className="game-spot-img" />
    </div>
  );
};