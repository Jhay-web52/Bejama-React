function PhotoItem({ item, onAdd }) {
  return (
    <div className="photo-item">
      {item.bestSeller && <span className="best-seller-tag">Best Seller</span>}
      <img src={item.img} alt={item.title} />
      <div className="photo-info">
        <span className="photo-category">{item.category}</span>
        <h3 className="photo-title">{item.title}</h3>
        <p className="photo-price">${item.price.toFixed(2)}</p>
        <button className="photo-add-btn" onClick={() => onAdd(item)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

function Gallery({ items, page, totalPages, setPage, sort, setSort, onAdd }) {
  return (
    <main className="gallery">
      <div className="gallery-header">
        <h2 className="gallery-title">
          Photography / <span>Premium Photos</span>
        </h2>
        <button className="filters-toggle" type="button">Filters</button>
        <select
          className="sort-dropdown"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="none">↕ Sort By Price</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="newest">Newest First</option>
        </select>
      </div>

      <div className="photo-grid">
        {items.map((item, i) => (
          <PhotoItem key={i} item={item} onAdd={onAdd} />
        ))}
      </div>

      <div className="pagination">
        <button onClick={() => setPage(Math.max(1, page - 1))}>‹</button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={page === i + 1 ? "active" : ""}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button onClick={() => setPage(Math.min(totalPages, page + 1))}>›</button>
      </div>
    </main>
  );
}


export default Gallery;