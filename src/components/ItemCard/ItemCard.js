import React, { useEffect, useState } from "react";
import Stepper from "../Stepper/Stepper";
import style from "./ItemCard.module.css";
import Button from "react-bootstrap/Button";
import HeartIcon from "../HeartSwitch/HeartIcon";

const ItemCard = ({ item, setCart }) => {
  let [itemQuantity, setItemQuantity] = useState(0);

  const handleIncrement = () => {
    setItemQuantity(itemQuantity + 1);
  };

  const handleDecrement = () => {
    if (itemQuantity > 0) setItemQuantity(itemQuantity - 1);
  };

  const handleAddToCart = (item, quantity) => {
    if (quantity > 0) {
      const cartItem = {
        quantity,
        ...item,
      };
      setCart((prevState) => [...prevState, cartItem]);
    }
  };

  return (
    <div className={style.itemCard}>
      <section className={style.topSection}>
        <p className={style.yellowtag}>{item.promotion}</p>
        <HeartIcon />
      </section>
      <img
        src={item.img}
        alt={item.name}
        style={{ height: "15rem", width: "15rem" }}
      />
      <section className={style.itemInfoSection}>
        <p style={{ fontSize: "0.7rem", color: "gray" }}>
          {item.available ? "Available (In Stock)" : "Out of Stock"}
        </p>
        <p style={{ fontWeight: "bold" }}>{item.name}</p>
        <div className={style.prices}>
          <p>${item.salePrice}</p>
          <p
            style={{
              color: "gray",
              textDecorationLine: "line-through",
              opacity: "60%",
            }}
          >
            ${item.marketPrice}
          </p>
        </div>
      </section>
      <section className={style.checkout}>
        <Stepper
          itemQuantity={itemQuantity}
          increment={handleIncrement}
          decrement={handleDecrement}
        />
        <Button
          variant="success"
          onClick={() => handleAddToCart(item, itemQuantity)}
        >
          Add to Cart
        </Button>
      </section>
    </div>
  );
};

export default ItemCard;
