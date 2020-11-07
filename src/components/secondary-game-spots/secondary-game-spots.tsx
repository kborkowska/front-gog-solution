import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";

import { SecondaryGameSpot } from "./secondary-game-spot/secondary-game-spot";
import { SecondaryGameSpotProps } from "../../interfaces";
import { StateEntities } from "../../consts";
import { entitySelector } from "../../store/selectors";

import "./secondary-game-spots.css";

export const SecondaryGameSpots: FunctionComponent = () => {
  const games = useSelector(entitySelector(StateEntities.Games)).toJS();

  return (
    <div className="secondary-content-container">
      <div className="secondary-content">
        {games.map((gameProps: SecondaryGameSpotProps) => (
          <SecondaryGameSpot {...gameProps} id={gameProps.key} />
        ))}
      </div>
    </div>
  );
};
