import React, { FunctionComponent } from "react";
import { ButtonSizes } from "../../consts";

interface DiscountTagProps {
  enabled: boolean;
  size: ButtonSizes;
  discount?: string;
}

export const DiscountTag: FunctionComponent<DiscountTagProps> = ({
  discount,
  enabled,
  size,
}) => {
  return enabled ? (
    <div className={`game-spot-button discount-tag-${size}`}>{discount}</div>
  ) : null;
};
