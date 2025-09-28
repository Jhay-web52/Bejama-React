function Sidebar({ categories, activeCats, toggleCategory, prices, activePrices, togglePrice }) {
  return (
    <aside className="sidebar">
      <h3>Category</h3>
      <ul className="category-list">
        {categories.map((cat) => (
          <li key={cat}>
            <label>
              <input
                type="checkbox"
                checked={activeCats.includes(cat)}
                onChange={() => toggleCategory(cat)}
              />
              {cat}
            </label>
          </li>
        ))}
      </ul>

      <div className="price-filter">
        <h4>Price range</h4>
        {prices.map((price) => (
          <label key={price}>
            <input
              type="checkbox"
              checked={activePrices.includes(price)}
              onChange={() => togglePrice(price)}
            />
            {price}
          </label>
        ))}
      </div>
    </aside>
  );
}


export default Sidebar;