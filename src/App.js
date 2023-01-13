// IMPORT useState
import "./index.css";
import { useEffect, useState } from "react";
import { getAllItems } from "./services/items-service";
import ItemCard from "./components/ItemCard/ItemCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Navigation } from "./components/Nav/Navigation";

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
      <Header />
      <Navigation />
      <main className="itemCardContainer">{itemCards}</main>
      <Footer />
    </div>
  );
}
