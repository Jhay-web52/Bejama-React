import { useState, useMemo } from "react";
import Header from "./Header";
import Hero from "./Hero";
import Sidebar from "./Sidebar";
import Gallery from "./Gallery";
import Cart from "./Cart";
import "./style.css";


const categories = ["People", "Premium", "Pets", "Food", "Landmarks", "Cities", "Nature"];
const prices = ["Lower than $20", "$20 - $100", "$100 - $200", "More than $200"];

const allItems = [
  { title: "Red Bench", category: "People", price: 3.89, img: "images/Rectangle 2.png", bestSeller: true },
  { title: "Egg Balloon", category: "Food", price: 93.89, img: "images/Group 4.png" },
  { title: "Man", category: "People", price: 100, img: "images/Rectangle 2.4.png" },
  { title: "Architecture", category: "Landmarks", price: 101, img: "images/Rectangle 2.5.png" },
];

 function App() {
  const [activeCats, setActiveCats] = useState(["People", "Pets", "Food", "Landmarks"]);
  const [activePrices, setActivePrices] = useState([]);
  const [sort, setSort] = useState("none");
  const [page, setPage] = useState(1);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const toggleCategory = (cat) =>
    setActiveCats((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );

  const togglePrice = (price) =>
    setActivePrices((prev) =>
      prev.includes(price) ? prev.filter((p) => p !== price) : [...prev, price]
    );

  const filteredItems = useMemo(() => {
    return allItems.filter((item) => {
      const catOk = activeCats.length === 0 || activeCats.includes(item.category);
      let priceOk = true;
      if (activePrices.length > 0) {
        priceOk = activePrices.some((range) => {
          if (range.includes("Lower")) return item.price < 20;
          if (range.includes("More")) return item.price > 200;
          const m = range.match(/\$(\d+)\s*-\s*\$(\d+)/);
          if (m) {
            const min = Number(m[1]);
            const max = Number(m[2]);
            return item.price >= min && item.price <= max;
          }
          return true;
        });
      }
      return catOk && priceOk;
    });
  }, [activeCats, activePrices]);

  const sortedItems = useMemo(() => {
    let list = [...filteredItems];
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    else if (sort === "newest") list.reverse();
    return list;
  }, [filteredItems, sort]);

  const perPage = 6;
  const totalPages = Math.max(1, Math.ceil(sortedItems.length / perPage));
  const paginatedItems = sortedItems.slice((page - 1) * perPage, page * perPage);

  const addToCart = (item) => setCart((prev) => [...prev, item]);
  const removeFromCart = (index) => setCart((prev) => prev.filter((_, i) => i !== index));
  const clearCart = () => setCart([]);

  console.log("Cart open state:", cartOpen);

  return (
    <div className="app">
      <Header cartCount={cart.length} onCartOpen={setCartOpen} />
      <Hero onAdd={() => addToCart(allItems[0])} />

      <div className="main-content">
        <Sidebar
          categories={categories}

          activeCats={activeCats}
          toggleCategory={toggleCategory}
          prices={prices}
          activePrices={activePrices}
          togglePrice={togglePrice}
        />
        <Gallery
          items={paginatedItems}
          page={page}
          totalPages={totalPages}
          setPage={setPage}
          sort={sort}
          setSort={setSort}
          onAdd={addToCart}
        />
      </div>

      {cartOpen && (
        <Cart
          cart={cart}
          onRemove={removeFromCart}
          onClear={clearCart}
          onClose={() => setCartOpen(false)}
        />
      )}
    </div>
  );
}


export default App;