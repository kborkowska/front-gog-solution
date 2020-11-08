import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";

import { SmallGameSpot } from "./small-game-spot/small-game-spot";
import { SmallGameSpotProps } from "../../interfaces";
import { StateEntities } from "../../consts";
import { entitySelector } from "../../store/selectors";

import "./small-game-spots.css";

export const SmallGameSpots: FunctionComponent = () => {
  const games = useSelector(entitySelector(StateEntities.Games)).toJS();

  return (
    <div className="secondary-content-container">
      <div className="secondary-content">
        {games.map((gameProps: SmallGameSpotProps) => (
          <SmallGameSpot {...gameProps} id={gameProps.key} />
        ))}
      </div>
    </div>
  );
};
