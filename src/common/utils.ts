import { List, Map } from "immutable";

export const cutText = (text: string, characterLimit: number = 28) =>
  text.length > 28 ? `${text.slice(0, 25)}...` : text;

export const getCartSummary = (numberOfItems: number): string => {
  return (numberOfItems
    ? `${numberOfItems} item${numberOfItems > 1 ? "s" : ""} in cart`
    : "the cart is empty"
  ).toUpperCase();
};

export const getTotalPrice = (prices: List<Map<string, any>>) =>
  `$ ${prices.reduce((acc: number, curr: Map<string, any>) => {
    return (acc += curr.get("price"));
  }, 0)}`;
