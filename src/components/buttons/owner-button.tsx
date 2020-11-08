import React, { FunctionComponent } from "react";

import { GenericButton, GenericButtonProps } from "./generic-button";
import { OwnershipState, ButtonSizes } from "../../common/consts";

import "./buttons.css";

interface OwnerButtonProps extends GenericButtonProps {
  size: ButtonSizes;
}

export const OwnerButton: FunctionComponent<OwnerButtonProps> = ({
  size,
  ...props
}) => {
  return (
    <GenericButton
      {...props}
      className={`game-spot-button owner-button-${size}`}
    >
      {OwnershipState.Owns.toUpperCase()}
    </GenericButton>
  );
};
