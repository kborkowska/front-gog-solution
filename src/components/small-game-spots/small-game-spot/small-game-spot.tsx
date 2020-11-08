import React, { FunctionComponent } from "react";
import { useDispatch } from "react-redux";

import { ActionTypes, OwnershipState } from "../../../consts";
import { GenericButton } from "../../generic-button/generic-button";
import { SmallGameSpotProps } from "../../../interfaces";

import "./small-game-spot.css";

interface SmallGameSpotOwnProps extends SmallGameSpotProps {
  id: string;
}

export const SmallGameSpot: FunctionComponent<SmallGameSpotOwnProps> = ({
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
            className="available-button small-game-spot-tag"
            onClick={onClick}
          >
            {`$ ${price}`}
          </GenericButton>
        );
      case OwnershipState.InCart:
        return (
          <GenericButton className="in-cart-button small-game-spot-tag">
            {OwnershipState.InCart.toUpperCase()}
          </GenericButton>
        );
      case OwnershipState.Owns:
        return (
          <GenericButton className="owner-button small-game-spot-tag">
            {OwnershipState.Owns.toUpperCase()}
          </GenericButton>
        );
    }
  };

  return (
    <div className="small-game-spot-container">
      <img src={imageSource} alt={name} />
      <div className="small-game-spot-card">
        <h4
          className={`small-game-spot-name ${
            state === OwnershipState.Owns ? "small-game-spot-name-owns" : ""
          }`}
        >
          {name.toUpperCase()}
        </h4>
        <div className="small-game-spot-tags">
          {discount && (
            <div className="discount-tag small-game-spot-tag">{discount}</div>
          )}
          {getGameSpotButton(state, id, price)}
        </div>
      </div>
    </div>
  );
};
