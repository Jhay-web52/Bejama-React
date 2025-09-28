function Cart({ cart, onRemove, onClear, onClose }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <div className="cart-backdrop" onClick={onClose}></div>
      <aside className="cart-panel" role="dialog" aria-label="Shopping cart">
        <div className="cart-header">
          <h3>Your Cart</h3>
          <button className="cart-close" onClick={onClose}>×</button>
        </div>
        <div className="cart-items">
          {cart.map((item, i) => (
            <div key={i} className="cart-item">
              <img className="cart-item-thumb" src={item.img} alt={item.title} />
              <div>
                <div className="cart-item-title">{item.title}</div>
                <div className="cart-item-price">${item.price.toFixed(2)}</div>
              </div>
              <button className="cart-item-remove" onClick={() => onRemove(i)}>
                Remove
              </button>
            </div>
          ))}
        </div>
        <div className="cart-footer">
          <div className="cart-total">
            <span className="cart-total-label">Total:</span>
            <span className="cart-total-value">${total.toFixed(2)}</span>
          </div>
          <button className="clear-cart-btn" onClick={onClear}>Clear</button>
        </div>
      </aside>
    </>
  );
}

export default Cart;