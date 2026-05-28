import "../../styles/hero.css";
import Button from '../button.jsx';
import { Link } from "react-router-dom";
function Hero(){
    const thisYear = new Date().getFullYear()
    return(
<section className="hero">
    <div className='hero-content'>
        <div className="hero-eyebrow">
            New Collection {thisYear}
        </div>
        <h1 className="hero-title">
            Step into<br/><em>Elegance.</em>
        </h1>
        <p className="hero-sub">
            Premium shoes &amp; socks for women and kids.
        </p>
        <p className="hero-tag">
            Comfort. Style. Confidence.
        </p>
        <div className="hero-cta">
            <Link to="/shop">
                <Button variant ="btn-dark">
                    Shop Now →
                </Button>
            </Link>
            <Link to='/about'>
                <Button variant ="btn-outline">
                     Our Story
                </Button>
            </Link>
        </div>
        <div className="hero-stats">
            <div>
                <div className="stat-n">2K+</div>
                <div className="stat-l">Products</div>
            </div>
            <div>
                <div className="stat-n">50K+</div>
                <div className="stat-l">Happy Customers</div>
            </div>
            <div>
                <div className="stat-n">4.9★</div>
                <div className="stat-l">Average Rating</div>
            </div>
        </div>
    </div>
    <div className="hero-visual">
        <img className="hero-img" 
            src="https://picsum.photos/seed/sole_hero/500/560"
            alt="Sole & Step Hero"/>
        <div className="hero-card c1">
            <div className="hc-label">Free Shipping</div>
            <div className="hc-val">On orders over $80</div>
        </div>
        <div className="hero-card c2">
            <div className="hc-label">New Arrivals</div>
            <div className="hc-val">30+ new styles weekly</div>
        </div>
    </div>
</section>
  )
}
export default Hero;