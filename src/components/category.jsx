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
                    <img src="https://picsum.photos/seed/cat_women/500/480" alt="Women"/>
                    <div className="cat-ov">
                      <h3 className="cat-name">Women</h3>
                      <div className="cat-sub">Step in style</div>
                    </div>
                  </Link>
                </div>
              <div className="cat-card">
                <Link to='/kids'>
                  <img src="https://picsum.photos/seed/cat_kids/500/480" alt="Kids"/>
                  <div className="cat-ov">
                      <h3 className="cat-name">Kids</h3>
                      <div className="cat-sub">Made for little feet</div>
                  </div>
                </Link>
              </div>
              <div className="cat-card">
                <Link to='/newArrivals'>
                  <img src="https://picsum.photos/seed/cat_/500/480" alt="Kids"/>
                  <div className="cat-ov">
                      <h3 className="cat-name">Others</h3>
                      <div className="cat-sub">socks,clothes &amp; man </div>
                  </div>
                </Link>
              </div>
            </div>
            <div style={{textAlign:"center",marginTop:"44px"}}>
              <Link to='/shop'><Button variant="btn-outline">Explore All</Button></Link>
            </div>
        </section>
    )
}
export default Category;