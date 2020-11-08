import React, { useState } from "react";
import { useSelector } from "react-redux";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import { List } from "immutable";

import { CartDropdown } from "./cart-dropdown/cart-dropdown";
import { inCartSelector } from "../../store/selectors";
import { StateEntities } from "../../common/consts";
import { MenuButton } from "../buttons/menu-button";

import CartIcon from "../../icons/cart-icon.png";

import "./cart.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    popoverPaper: {
      borderRadius: 0,
      backgroundColor: "#F7F7F7",
      boxShadow: "0px 15px 15px 0px rgba(0, 0, 0, 0.15)",
    },
  })
);

export const Cart = () => {
  const inCartGames: List<Map<string, any>> = useSelector(
    inCartSelector(StateEntities.Games)
  );
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <MenuButton active={open} type="button" onClick={handleClick}>
        <img src={CartIcon} alt="Cart" />
        {inCartGames.size}
      </MenuButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        classes={{ paper: classes.popoverPaper }}
      >
        <CartDropdown />
      </Popover>
    </>
  );
};
