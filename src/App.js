// IMPORT useState
import "./index.css";
import { useEffect, useState } from "react";
import { getAllItems } from "./services/items-service";
import ItemCard from "./components/ItemCard/ItemCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Footer } from "./components/Footer/Footer";
import { Navigation } from "./components/Nav/Navigation";
import { Cart } from "./components/Cart/Cart";

export default function App() {
  const [items, setItems] = useState([]);
  let [cart, setCart] = useState([]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    getItemData();
  }, []);

  async function getItemData() {
    const items = await getAllItems();
    setItems(items);
  }

  const itemCards = items.map((item) => {
    return <ItemCard item={item} setCart={setCart} />;
  });

  // The first item in local storage is not getting added to cart Items
  const cartItems = JSON.parse(localStorage.cart).map((item) => {
    return <Cart item={item} />;
  });

  return (
    <div className="App">
      <Navigation numItemsInCart={cart.length} />
      <main className="itemCardContainer">{itemCards}</main>
      {/* Need to replace cart items with localStorage */}
      {cartItems}
      <Footer />
    </div>
  );
}
