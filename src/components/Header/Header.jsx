import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import style from "./Header.module.css";

export const Header = ({ numItemsInCart, displayCart, setDisplayCart }) => {
  return (
    <header>
      <h1>Swaroop's Grocery Store</h1>
      <section className={style.topRight}>
        <div
          onClick={() => setDisplayCart(!displayCart)}
          className={style.cartSection}
        >
          <AiOutlineShoppingCart size="1.5rem" />
          {/* <p>View Cart</p> */}
          <p className={style.cartCounter}>{numItemsInCart || 0}</p>
        </div>
        |<p>Login</p>
      </section>
    </header>
  );
};
