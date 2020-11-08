import React, { FunctionComponent } from "react";

import { GenericButton, GenericButtonProps } from "./generic-button";
import { OwnershipState, ButtonSizes } from "../../consts";

import "./buttons.css";

interface InCartButtonProps extends GenericButtonProps {
  size: ButtonSizes;
}

export const InCartButton: FunctionComponent<InCartButtonProps> = ({
  size,
  ...props
}) => {
  return (
    <GenericButton
      {...props}
      className={`game-spot-button in-cart-button-${size}`}
    >
      {OwnershipState.InCart.toUpperCase()}
    </GenericButton>
  );
};
