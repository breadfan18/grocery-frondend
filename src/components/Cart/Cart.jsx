import React from "react";

export const Cart = ({ item }) => {
  return (
    <div>
      <p>{item.name}</p>
      <img
        src={item.img}
        alt={item.name}
        style={{ height: "5rem", width: "5rem" }}
      />
      <p>{item.salePrice}</p>
      <p>{item.quantity}</p>
      <hr />
    </div>
  );
};
