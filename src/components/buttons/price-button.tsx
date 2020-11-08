import React, { FunctionComponent } from "react";

import { GenericButton, GenericButtonProps } from "./generic-button";
import { ButtonSizes } from "../../common/consts";

import "./buttons.css";

interface PriceButtonProps extends GenericButtonProps {
  size: ButtonSizes;
  price: number;
}

export const PriceButton: FunctionComponent<PriceButtonProps> = ({
  size,
  price,
  ...props
}) => {
  return (
    <GenericButton
      {...props}
      className={`game-spot-button price-button-${size}`}
    >
      {`$ ${price}`}
    </GenericButton>
  );
};
