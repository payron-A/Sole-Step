import "/src/styles/hero.css";
function FeaturesBar(){
    return(
        <div className="feat-bar">
            <div className="feat-item">
                <div className="feat-icon">✦</div>
                <div>
                    <div className="feat-ttl">Premium Quality</div>
                    <div className="feat-sub">Finest materials</div>
                </div>
            </div>
            <div className="feat-item"><div className="feat-icon"><i class="fa-solid fa-bag-shopping"></i></div><div><div className="feat-ttl">Free Shipping</div><div className="feat-sub">On orders over $80</div></div></div>
            <div className="feat-item"><div className="feat-icon"><i class="fa-solid fa-reply"></i></div><div><div className="feat-ttl">Easy Returns</div><div className="feat-sub">30‑day returns</div></div></div>
            <div className="feat-item"><div className="feat-icon"><i class="fa-solid fa-shield-halved"></i></div><div><div className="feat-ttl">Secure Payment</div><div className="feat-sub">100% protected</div></div></div>
        </div>
    )
}
export default FeaturesBar;