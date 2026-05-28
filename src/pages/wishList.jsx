import { Link } from 'react-router-dom';
import { useWishlist } from '../context/wishlistContext';
import Footer from '../components/footer';
import PageHeader from '../components/pgHeader';
import '../styles/wishList.css';
import Button from '../components/button';

function WishlistPage() {
  const { wishlist, toggleWishlist } = useWishlist();

  return (
    <div className="page">
      <div className="wl-wrap">
        <PageHeader currentPage="WishList"/>
        <div className="wl-header">
          <div className="eyebrow">Your Collection</div>
          <h2>Wishlist</h2>
          <p className="wl-count">
            {wishlist.length === 0
              ? 'No saved items yet'
              : `${wishlist.length} item${wishlist.length > 1 ? 's' : ''} saved`}
          </p>
        </div>
        {wishlist.length === 0 ? (
          <div className="wl-empty">
            <svg width="56" height="56" fill="none" stroke="var(--stone)" strokeWidth="1.2" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <p>You haven't saved anything yet.</p>
            <Link to="/shop">
                <Button variant="btn-dark">Browse Shop</Button>
            </Link>
          </div>
        ) : (
          <div className="wl-grid">
            {wishlist.map(p => (
              <div key={p.id} className="wl-card">
                <div className="wl-card-img">
                  <Link to={`/product/${p.id}`}>
                    <img src={p.img} alt={p.name} draggable="false" />
                  </Link>
                </div>
                <div className="wl-card-info">
                  <div className="category">{p.cat}</div>
                  <Link to={`/product/${p.id}`} className="wl-card-name">{p.name}</Link>
                  <div className="wl-card-price">${p.price.toFixed(2)}</div>
                  <button
                    className="add-to-cart-btn"
                    onClick={() => toggleWishlist(p)}
                  >
                    Remove From WishList
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
      <Footer />
    </div>
  );
}

export default WishlistPage;