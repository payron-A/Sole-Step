import { Link } from 'react-router-dom';
import { useWishlist } from '../context/wishlistContext';
import '../styles/card.css';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/toastContext';
function Card({ id, badge, image, category, title, stars = 0, price, originalPrice=""}) {
  const { addToCart } = useCart();
  const {showToast} = useToast();
  const { toggleWishlist, isWishlisted } = useWishlist();
  const product = { id, name: title, img: image, price, cat: category, stars, badge };
  const wishlisted = isWishlisted(id);
  function handleAddToCart(){
    addToCart({ id, image, title, price, category });
  }
  return (
    <div className="product-card">
      {badge && <div className="badge">{badge}</div>}
      <div className="card-header">
        <button className="wishlist-btn"
                onClick={() => {
                  toggleWishlist(product);
                  }}>
            <svg width="16" height="16"
                fill={wishlisted ? 'var(--rose)' : 'none'}
                stroke="var(--rose)" strokeWidth="1.8" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
        </button>
        <Link to={`/product/${id}`}>
          <img src={image} alt={title} draggable="false" />
        </Link>
      </div>
      <div className="card-content">
        <div className="category">{category}</div>
        <Link to={`/product/${id}`}><h3  className="wl-card-name">{title}</h3></Link>
        
        <div className="rating">
          {Array.from({ length: 5 }, (_, i) => (
            <i key={i} className={i < stars ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
          ))}
        </div>
        <div className="price-box">
          <span className="current-price">{price.toFixed(2)}$</span>
          {originalPrice && <span className="original-price">{originalPrice}$</span>}
        </div>
        <button className="add-to-cart-btn" onClick={()=>{handleAddToCart();showToast(`Add ${product.name} to Cart`)}}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Card;