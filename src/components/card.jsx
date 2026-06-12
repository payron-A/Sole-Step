import { Link ,useNavigate} from 'react-router-dom';
import '../styles/card.css';
import { useCart } from '../context/CartContext';
function Card({ id, badge, image, category, title, stars = 0, price, originalPrice=""}) {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const { cart, showToast } = useCart();
  function handleAddToCart(){
    addToCart({ id, image, title, price, category });
  }
  return (
    <div className="product-card">
      {badge && <div className="badge">{badge}</div>}
      <div className="card-header">
        <button className="wishlist-btn" onClick={() => showToast("Add to wishList")}>
          <i className="fa-solid fa-heart"></i>
        </button>
        <Link to={`/product/${id}`}>
          <img src={image} alt={title} draggable="false" />
        </Link>
      </div>
      <div className="card-content">
        <div className="category">{category}</div>
        <h3 className="product-title">{title}</h3>
        <div className="rating">
          {Array.from({ length: 5 }, (_, i) => (
            <i key={i} className={i < stars ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
          ))}
        </div>
        <div className="price-box">
          <span className="current-price">{price}$</span>
          {originalPrice && <span className="original-price">{originalPrice}$</span>}
        </div>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Card;