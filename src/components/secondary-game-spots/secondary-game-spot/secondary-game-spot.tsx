import React, { FunctionComponent } from "react";

import { OwnershipState } from "../../../consts";
import { GenericButton } from "../../generic-button/generic-button";
import { SecondaryGameSpotProps } from "../../../interfaces";

import "./secondary-game-spot.css";

export const SecondaryGameSpot: FunctionComponent<SecondaryGameSpotProps> = ({
  imageSource,
  name,
  discount,
  price,
  state,
}) => {
  const getGameSpotButton = (state: OwnershipState, price?: number) => {
    switch (state) {
      case OwnershipState.Available:
        return (
          <GenericButton className="available-button secondary-game-spot-tag">
            {`$ ${price}`}
          </GenericButton>
        );
      case OwnershipState.InCart:
        return (
          <GenericButton className="in-cart-button secondary-game-spot-tag">
            {OwnershipState.InCart.toUpperCase()}
          </GenericButton>
        );
      case OwnershipState.Owns:
        return (
          <GenericButton className="owner-button secondary-game-spot-tag">
            {OwnershipState.Owns.toUpperCase()}
          </GenericButton>
        );
    }
  };

  return (
    <div className="secondary-game-spot-container">
      <img src={imageSource} alt={name} />
      <div className="secondary-game-spot-card">
        <h4 className="secondary-game-spot-name">{name.toUpperCase()}</h4>
        <div className="secondary-game-spot-tags">
          {discount && (
            <div className="discount-tag secondary-game-spot-tag">
              {discount}
            </div>
          )}
          {getGameSpotButton(state, price)}
        </div>
      </div>
    </div>
  );
};
