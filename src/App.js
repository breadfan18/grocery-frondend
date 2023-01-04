// IMPORT useState
import "./index.css";
import { useEffect, useState } from "react";
import { getAllItems } from "./services/items-service";
import ItemCard from "./components/ItemCard/ItemCard";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItemData();
  }, []);

  async function getItemData() {
    const items = await getAllItems();
    setItems(items);
  }

  const itemCards = items.map((item) => {
    return <ItemCard item={item} />;
  });

  return (
    <div className="App">
      <h1>Grocery Items</h1>
      <div className="itemCardContainer">{itemCards}</div>
    </div>
  );
}
