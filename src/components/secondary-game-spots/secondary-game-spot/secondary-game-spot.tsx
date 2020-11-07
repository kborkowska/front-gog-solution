import React, { FunctionComponent } from "react";
import { useDispatch } from "react-redux";

import { ActionTypes, OwnershipState } from "../../../consts";
import { GenericButton } from "../../generic-button/generic-button";
import { SecondaryGameSpotProps } from "../../../interfaces";

import "./secondary-game-spot.css";

interface SecondaryGameSpotOwnProps extends SecondaryGameSpotProps {
  id: string;
}

export const SecondaryGameSpot: FunctionComponent<SecondaryGameSpotOwnProps> = ({
  imageSource,
  name,
  discount,
  price,
  state,
  id,
}) => {
  const dispatch = useDispatch();

  const getGameSpotButton = (
    state: OwnershipState,
    id: string,
    price?: number
  ) => {
    switch (state) {
      case OwnershipState.Available:
        const onClick = () => {
          dispatch({
            type: ActionTypes.ChangeGameOwnershipState,
            payload: { key: id, state: OwnershipState.InCart },
          });
        };

        return (
          <GenericButton
            className="available-button secondary-game-spot-tag"
            onClick={onClick}
          >
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
        <h4
          className={`secondary-game-spot-name ${
            state === OwnershipState.Owns ? "secondary-game-spot-name-owns" : ""
          }`}
        >
          {name.toUpperCase()}
        </h4>
        <div className="secondary-game-spot-tags">
          {discount && (
            <div className="discount-tag secondary-game-spot-tag">
              {discount}
            </div>
          )}
          {getGameSpotButton(state, id, price)}
        </div>
      </div>
    </div>
  );
};
