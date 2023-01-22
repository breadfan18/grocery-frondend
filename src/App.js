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
  let [displayCart, setDisplayCart] = useState(false);

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

  return (
    <div className="App">
      <Navigation
        numItemsInCart={cart.length}
        displayCart={displayCart}
        setDisplayCart={setDisplayCart}
      />
      <main className="itemCardContainer">{itemCards}</main>
      {displayCart && <Cart items={cart} />}
      <Footer />
    </div>
  );
}
