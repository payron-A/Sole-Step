import '../styles/category.css';
import Button from './button';
function Category(){
    return(
         <section className="cats-sec">
            <div className="sec-head">
              <div className="eyebrow">Explore</div>
              <h2>Shop by Category</h2>
            </div>
            <div className="cat-grid">
              <div className="cat-card">
                <img src="https://picsum.photos/seed/cat_women/500/480" alt="Women"/>
                <div className="cat-ov">
                    <h3 className="cat-name">Women</h3>
                    <div className="cat-sub">Step in style</div>
                </div>
              </div>
              <div className="cat-card">
                <img src="https://picsum.photos/seed/cat_kids/500/480" alt="Kids"/>
                <div className="cat-ov">
                    <h3 className="cat-name">Kids</h3>
                    <div className="cat-sub">Made for little feet</div>
                </div>
              </div>
              <div className="cat-card">
                <img src="https://picsum.photos/seed/cat_/500/480" alt="Kids"/>
                <div className="cat-ov">
                    <h3 className="cat-name">Others</h3>
                    <div className="cat-sub">socks,clothes &amp; man </div>
                </div>
              </div>
            </div>
            <div style={{textAlign:"center",marginTop:"44px"}}>
              <Button variant="btn-outline">Explore All</Button>
            </div>
        </section>
    )
}
export default Category;