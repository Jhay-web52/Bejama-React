import React from "react";

function Header({ cartCount, onCartOpen }) {
  return (
    <header className="header">
      <img src="images/Group 12.png" alt="header logo" />
      <div className="cart-wrapper" onClick={() => onCartOpen(true)} style={{ cursor: "pointer" }}>
        <img src="images/Group 3.1.png" alt="shopping cart" />
        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
      </div>
    </header>
  );
}


export default Header;
