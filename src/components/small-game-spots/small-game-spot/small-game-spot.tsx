import React, { FunctionComponent } from "react";
import { useDispatch } from "react-redux";

import {
  ActionTypes,
  ButtonSizes,
  OwnershipState,
} from "../../../common/consts";
import { OwnerButton } from "../../buttons/owner-button";
import { PriceButton } from "../../buttons/price-button";
import { InCartButton } from "../../buttons/in-cart-button";
import { DiscountTag } from "../../buttons/discount-tag";
import { SmallGameSpotProps } from "../../../common/interfaces";

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
    price: number = 0
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
          <PriceButton
            size={ButtonSizes.Small}
            price={price}
            onClick={onClick}
          />
        );
      case OwnershipState.InCart:
        return <InCartButton size={ButtonSizes.Small} />;
      case OwnershipState.Owns:
        return <OwnerButton size={ButtonSizes.Small} />;
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
          <DiscountTag
            size={ButtonSizes.Small}
            enabled={!!discount}
            discount={discount}
          />
          {getGameSpotButton(state, id, price)}
        </div>
      </div>
    </div>
  );
};
