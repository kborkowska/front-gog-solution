import React, { FunctionComponent, useEffect, useState } from "react";

import { SecondaryGameSpot } from "./secondary-game-spot/secondary-game-spot";
import { SecondaryGameSpotProps } from "../../interfaces";
import { OwnershipState } from "../../consts";

import Oddworld from "../../games/oddworld.png";
import Chaos from "../../games/chaos.png";
import Settlers from "../../games/settlers.png";
import Neverwinter from "../../games/neverwinter.png";
import Assasin from "../../games/assasin.png";

import "./secondary-game-spots.css";

export const SecondaryGameSpots: FunctionComponent = () => {
  const [games, setGames] = useState<SecondaryGameSpotProps[]>([]);

  useEffect(() => {
    setGames([
      {
        id: "1",
        imageSource: Oddworld,
        name: "oddworld: stranger's wrath",
        discount: "-50%",
        price: 9.99,
        state: OwnershipState.Available,
      },
      {
        id: "2",
        imageSource: Chaos,
        name: "chaos on deponia",
        price: 9.99,
        state: OwnershipState.Owns,
      },
      {
        id: "3",
        imageSource: Settlers,
        name: "the settlers 2: gold edition",
        price: 5.99,
        state: OwnershipState.InCart,
      },
      {
        id: "4",
        imageSource: Neverwinter,
        name: "neverwinter nights",
        discount: "-50%",
        price: 4.99,
        state: OwnershipState.Available,
      },
      {
        id: "5",
        imageSource: Assasin,
        name: "assassin's creed: director's cut",
        price: 9.99,
        state: OwnershipState.InCart,
      },
    ]);
  }, []);

  return (
    <div className="secondary-content-container">
      <div className="secondary-content">
        {games.map((gameProps: SecondaryGameSpotProps) => (
          <SecondaryGameSpot {...gameProps} />
        ))}
      </div>
    </div>
  );
};
