import '../styles/category.css';
import Button from './button';
import { Link } from 'react-router-dom';
function Category(){
    return(
<section className="cats-sec">
  <div className="sec-head">
    <div className="eyebrow">Explore</div>
    <h2>Shop by Category</h2>
  </div>
  <div className="cat-grid">
      <div className="cat-card">
        <Link to='/women'>
          <img src="https://img.magnific.com/free-photo/pink-bow-ballerinas_23-2151940182.jpg?semt=ais_hybrid&w=740&q=80"
              alt="Women"/>
          <div className="cat-ov">
            <h3 className="cat-name">Women</h3>
            <div className="cat-sub">Step in style</div>
          </div>
        </Link>
      </div>
    <div className="cat-card">
      <Link to='/kids'>
        <img src="https://m.media-amazon.com/images/I/61shtGS14LL._AC_UF350,350_QL80_.jpg" alt="Kids"/>
        <div className="cat-ov">
            <h3 className="cat-name">Kids</h3>
            <div className="cat-sub">Made for little feet</div>
        </div>
      </Link>
    </div>
    <div className="cat-card">
      <Link to='/newArrivals'>
        <img src="https://cdn11.bigcommerce.com/s-w3ylp373lz/images/stencil/1280x1280/products/1353/7008/SKC1322-FLATLAY__40000.1746060823.jpg?c=1?imbypass=on" alt="Kids"/>
        <div className="cat-ov">
            <h3 className="cat-name">Others</h3>
            <div className="cat-sub">socks,clothes &amp; man </div>
        </div>
      </Link>
    </div>
  </div>
  <div style={{textAlign:"center",marginTop:"44px"}}>
    <Link to='/shop'>
      <Button variant="btn-outline">Explore All</Button>
    </Link>
  </div>
</section>
    )
}
export default Category;