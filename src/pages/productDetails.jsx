import Button from '../components/button';
import { useState } from 'react';
import FeaturesBar from '../components/hero/featuresBar';
import '/home/payron/Downloads/vsCode/vscode/vs code.data/sole-stip/src/styles/productDetails.css';
function ProductDetails(){
    const [url,setUrl] = useState("https://picsum.photos/seed/p05/400/450");
    return (
            <div className="page">
                <div className="pd-wrap">
                    <div className="gallery">
                        <div className="thumbs">
                            <img className="thumb act" src="https://picsum.photos/seed/p01/400/450" alt="Product"onClick={(e)=>{setUrl(e.target.src)}}/>
                            <img className="thumb" src="https://picsum.photos/seed/p02/400/450" alt="Product"onClick={(e)=>{setUrl(e.target.src)}}/>
                            <img className="thumb" src="https://picsum.photos/seed/p03/400/450" alt="Product"onClick={(e)=>{setUrl(e.target.src)}}/>
                            <img className="thumb" src="https://picsum.photos/seed/p04/400/450" alt="Product"onClick={(e)=>{setUrl(e.target.src)}}/>
                        </div>
                        <img className="main-img" src={url} alt="Product"/>
                    </div>
                    <div>
                        <h1 className="pd-name">White Premium Sneakers</h1>
                        <div className="pd-price">$89.00</div>
                        <div className="pd-rating">
                            <span className="stars">★★★★★</span>
                            <span>(43 reviews)</span>
                        </div>
                        <p className="pd-desc">Elegant white sneakers made with
                            premium leather. Perfectly balances everyday comfort 
                            and casual chic style. Crafted for the modern woman 
                            who values both fashion and function.
                        </p>

                        <div className="pd-actions">
                            <Button variant="btn-outline">Add to Cart</Button>
                            <Button variant="btn-rose"   >Buy Now →</Button>
                        </div>
                        <button className="wish-btn" >
                            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                            Add to Wishlist
                        </button>

                        <div style={{marginTop:"3rem"}}>
                            <FeaturesBar/>
                        </div>

                        <div className="accordion">
                            <div className="acc-item">
                                <div className="acc-hd"
                                     onClick={(e)=>{
                                        e.target.nextElementSibling.classList.toggle("open")
                                     }} >Details <span>+</span></div>
                                <div className="acc-bd">Premium leather upper with cushioned insole. Features breathable lining and durable rubber outsole. Available in full sizes 5–10. Runs true to size.</div>
                            </div>
                            <div className="acc-item">
                                <div className="acc-hd" 
                                     onClick={(e)=>{
                                        e.target.nextElementSibling.classList.toggle("open")
                                     }}>Shipping <span>+</span></div>
                                <div className="acc-bd">Standard shipping: 3–5 business days. Express: 1–2 days (additional fee). Free shipping on orders over $80. International shipping available.</div>
                            </div>
                            <div className="acc-item">
                                <div className="acc-hd"
                                     onClick={(e)=>{
                                        e.target.nextElementSibling.classList.toggle("open")
                                     }}>Returns <span>+</span></div>
                                <div className="acc-bd">Free returns within 30 days. Items must be unworn and in original packaging. Exchanges available for different sizes or colors.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    )
}
export default ProductDetails;