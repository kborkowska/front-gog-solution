import React, { FunctionComponent, ReactNode, MouseEvent } from "react";

export interface GenericButtonProps {
  children?: ReactNode | ReactNode[];
  className?: string;
  style?: {};
  disabled?: boolean;
  onClick?: (event: MouseEvent) => void;
}

export const GenericButton: FunctionComponent<GenericButtonProps> = (props) => {
  const { style, ...otherProps } = props;
  return (
    <button
      style={{ borderRadius: "3px", outline: "none", ...style }}
      {...otherProps}
    />
  );
};
