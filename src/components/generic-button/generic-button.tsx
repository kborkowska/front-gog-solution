import React, { FunctionComponent, ReactNode, MouseEvent } from "react";

interface GenericButtonProps {
  children?: ReactNode | ReactNode[];
  className?: string;
  style?: {};
  onClick?: (event: MouseEvent) => void;
}

export const GenericButton: FunctionComponent<GenericButtonProps> = (props) => {
  const { style, ...otherProps } = props;
  return <button style={{ borderRadius: "3px", ...style }} {...otherProps} />;
};
