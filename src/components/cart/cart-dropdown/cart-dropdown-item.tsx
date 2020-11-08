import React, { FunctionComponent, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { ActionTypes, OwnershipState } from "../../../common/consts";

import { SmallGameSpotProps } from "../../../common/interfaces";
import { cutText } from "../../../common/utils";
import { GenericButton } from "../../buttons/generic-button";

interface CartDropdownItemProps extends SmallGameSpotProps {
  id: string;
}

export const CartDropdownItem: FunctionComponent<CartDropdownItemProps> = (
  props
) => {
  const dispatch = useDispatch();
  const [hover, setHover] = useState(false);
  const onMouseOver = useCallback(() => {
    setHover(true);
  }, [setHover]);
  const onMouseLeave = useCallback(() => {
    setHover(false);
  }, [setHover]);
  const onRemove = () => {
    dispatch({
      type: ActionTypes.ChangeGameOwnershipState,
      payload: { key: props.id, state: OwnershipState.Available },
    });
  };

  return (
    <>
      <hr className="cart-separator" />
      <div
        className="cart-dropdown-item"
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
      >
        <img src={props.imageSource} alt="NA" />
        <div className="cart-dropdown-item-summary">
          <div className="cart-dropdown-item-name cart-dropdown-item-cut">
            {cutText(props.name).toUpperCase()}
            {hover && (
              <>
                <br />
                <GenericButton onClick={onRemove}>Remove</GenericButton>
              </>
            )}
          </div>
          <div className="cart-dropdown-price">{`$ ${props.price}`}</div>
        </div>
      </div>
    </>
  );
};
