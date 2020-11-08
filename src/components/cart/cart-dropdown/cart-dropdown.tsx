import React, { FunctionComponent, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { List, Map } from "immutable";

import { inCartSelector } from "../../../store/selectors";
import { ActionTypes, StateEntities } from "../../../consts";
import { GenericButton } from "../../buttons/generic-button";
import { CartDropdownItem } from "./cart-dropdown-item";

const getCatSummary = (numberOfItems: number): string => {
  return (numberOfItems
    ? `${numberOfItems} item${numberOfItems > 1 ? "s" : ""} in cart`
    : "the cart is empty"
  ).toUpperCase();
};

const getTotalPrice = (prices: List<Map<string, any>>) =>
  `$ ${prices.reduce((acc, curr) => {
    return (acc += curr.get("price"));
  }, 0)}`;

export const CartDropdown: FunctionComponent = () => {
  const inCartGames: List<Map<string, any>> = useSelector(
    inCartSelector(StateEntities.Games)
  );

  const dispatch = useDispatch();

  const onClick = useCallback(
    (event: React.MouseEvent<Element, MouseEvent>) => {
      dispatch({ type: ActionTypes.ClearCart });
    },
    [dispatch]
  );

  return (
    <div className="cart-dropdown">
      <div className="cart-dropdown-header">
        <div className="cart-dropdown-header-summary">
          <span>{getCatSummary(inCartGames.size)}</span>
          <span>{getTotalPrice(inCartGames)}</span>
        </div>
        <GenericButton
          disabled={!inCartGames.size}
          className={`cart-dropdown-header-button ${
            !inCartGames.size ? "cart-dropdown-header-button-disabled" : ""
          }`}
          onClick={onClick}
        >
          CLEAR CART
        </GenericButton>
      </div>
      {inCartGames
        .toJS()
        .sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0;
        })
        .map((game: any) => (
          <CartDropdownItem {...game} id={game.key} />
        ))}
    </div>
  );
};
