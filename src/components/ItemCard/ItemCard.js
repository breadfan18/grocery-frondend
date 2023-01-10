import React from "react";
import Stepper from "../Stepper/Stepper";
import style from "./ItemCard.module.css";
import Button from "react-bootstrap/Button";

const ItemCard = ({ item }) => {
  return (
    <div className={style.itemCard}>
      <img src={item.img} alt={item.name} style={{ height: "15rem" }} />
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
        <Stepper />
        <Button variant="success">Add to Cart</Button>
      </section>
    </div>
  );
};

export default ItemCard;
