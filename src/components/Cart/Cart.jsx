import React from "react";

export const Cart = ({ item }) => {
  return (
    <div>
      <p>{item.name}</p>
      <p>{item.salePrice}</p>
      <p></p>
    </div>
  );
};
