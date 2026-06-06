import '../styles/card.css';

function Card({ badge, image, category, title, stars = 5, price, originalPrice }) {
  return (
    <div className="product-card">
      {badge && <div className="badge">{badge}</div>}
      <div className="card-header">
        <button className="wishlist-btn" aria-label="Add to wishlist">
          <i className="fa-solid fa-heart"></i>
        </button>
        <img src={image} alt={title} draggable="false" />
      </div>
      <div className="card-content">
        <div className="category">{category}</div>
        <h3 className="product-title">{title}</h3>

        <div className="rating">
          {Array.from({ length: 5 }, (_, i) => (
            <i
              key={i}
              className={i < stars ? "fa-solid fa-star" : "fa-regular fa-star"}
            ></i>
          ))}
        </div>

        <div className="price-box">
          <span className="current-price">{price}</span>
          {originalPrice && (
            <span className="original-price">{originalPrice}</span>
          )}
        </div>

        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
}

export default Card;