import React from "react";
import { CartItem } from "./CartItem";

export const Cart = ({ items }) => {
  const cartItems = items.map((item) => <CartItem item={item} />);
  return <div>{cartItems}</div>;
};
