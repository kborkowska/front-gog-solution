import React, { FunctionComponent, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { List, Map } from "immutable";

import { inCartSelector } from "../../../store/selectors";
import { ActionTypes, StateEntities } from "../../../common/consts";
import { GenericButton } from "../../buttons/generic-button";
import { CartDropdownItem } from "./cart-dropdown-item";
import { getCartSummary, getTotalPrice } from "../../../common/utils";

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
          <span>{getCartSummary(inCartGames.size)}</span>
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
