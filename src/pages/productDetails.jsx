import { useParams, Link  } from 'react-router-dom';
import { originProducts } from '../js/products.jsx';
import Button from '../components/button';
import Footer from '../components/footer';
import FeaturesBar from '../components/hero/featuresBar';
import { useState } from 'react';
import '../styles/productDetails.css';
function ProductDetails() {
  const { id } = useParams();
  const product = [...originProducts].find(p => p.id === Number(id));
  if (!product) {
    return (
      <div style={{ padding: '4rem', textAlign: 'center', }}>
        <h2 style={{marginBottom:"1.3rem"}}>Product not found</h2>
        <Link to="/shop.jsx"><Button variant="btn-dark">Back to Shop</Button></Link>
      </div>
    );
  }
  const [mainImg, setMainImg] = useState(product.img);
  return (
    <div className="page">
      <div className="pd-wrap">
        <div className="gallery">
          <div className="thumbs">
            <img className="thumb act" src={product.img} alt={product.name}
                 onClick={(e) => setMainImg(e.target.src)} />
          </div>
          <img className="main-img" src={mainImg} alt={product.name} />
        </div>

        <div>
          <h1 className="pd-name">{product.name}</h1>
          <div className="pd-price">${product.price}.00</div>
          <div className="pd-rating">
            <span className="stars">{'★'.repeat(product.stars)}{'☆'.repeat(5 - product.stars)}</span>
          </div>
          <p className="pd-desc">{product.desc || 'Premium quality footwear crafted for comfort and style.'}</p>

          <div className="pd-actions">
            <Button variant="btn-outline">Add to Cart</Button>
            <Button variant="btn-rose">Buy Now →</Button>
          </div>

          <div style={{ marginTop: '3rem' }}>
            
          </div>
          
        </div>
      </div>
      <FeaturesBar />
      <Footer />
    </div>
  );
}

export default ProductDetails;