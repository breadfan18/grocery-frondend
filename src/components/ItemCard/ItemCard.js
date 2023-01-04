import React from "react";
import Stepper from "../Stepper/Stepper";
import style from "./ItemCard.module.css";
import Button from "react-bootstrap/Button";

const ItemCard = ({ item }) => {
  return (
    <div className={style.itemCard}>
      <p>{item.name}</p>
      <p>{item.salePrice}</p>
      <Stepper />
      <Button>Add to Cart</Button>
    </div>
  );
};

export default ItemCard;
