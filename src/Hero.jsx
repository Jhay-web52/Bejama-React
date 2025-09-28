function Hero({ onAdd }) {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-top">
          <h1 className="hero-title">Samurai King Resting</h1>
          <button className="add-to-cart-btn" onClick={onAdd}>
            Add to Cart
          </button>
        </div>

        <div className="hero-image-wrapper">
          <img
            src="images/pexels-evgeny-tchebotarev-2187304.png"
            alt="Samurai King Resting"
            className="hero-image"
          />
          <span className="photo-of-day">Photo of the day</span>
        </div>

        <div className="hero-description">
          <div className="description-left">
            <h3>About the Samurai King Resting</h3>
            <span className="photo-category">Pets</span>
            <p>
              So how did the classical Latin become so incoherent? According to
              McClintock, a 15th century typesetter likely scrambled part of
              Cicero's De Finibus in order to provide placeholder text to mockup
              various fonts for a type specimen book.
            </p>
            <p>
              Text to mockup various fonts for a type specimen book. So how did
              the classical Latin become so incoherent? According to McClintock.
            </p>
          </div>

          <div className="description-right">
            <h3>People also buy</h3>
            <div className="people-also-buy">
              <img src="images/Rectangle 10.png" alt="Camera equipment" />
              <img src="images/Rectangle 10.1.png" alt="Picture frame" />
              <img src="images/Rectangle 10.2.png" alt="Photo print" />
            </div>
            <div className="details">
              <h4>Details</h4>
              <p><strong>Size:</strong> 1020 x 1020 pixel</p>
              <p><strong>File size:</strong> 15 mb</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default Hero;