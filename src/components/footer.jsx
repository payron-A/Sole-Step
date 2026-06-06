import '../styles/footer.css';
function Footer(){
    return(
        <footer>
            <div className="footer-grid">
              <div>
                <h2 className="ft-brand">Sole &amp; <em>Step</em></h2>
                <p className="ft-desc">Premium shoes &amp; socks for women and kids. Comfort. Style. Confidence.</p>
                <div className="social-row">
                  <div className="soc-btn">f</div>
                  <div className="soc-btn">in</div>
                  <div className="soc-btn" style={{fontSize:"12px"}}>𝕏</div>
                  <div className="soc-btn" style={{fontSize:"11px"}}>▶</div>
                </div>
              </div>
              <div>
                <div className="ft-col-ttl">Shop</div>
                <a className="ft-link">Women</a>
                <a className="ft-link">Kids</a>
                <a className="ft-link">New Arrivals</a>
                <a className="ft-link">Sale</a>
              </div>
              <div>
                <div className="ft-col-ttl">Customer Care</div>
                <a className="ft-link">Contact Us</a>
                <a className="ft-link">Shipping &amp; Delivery</a>
                <a className="ft-link">Returns &amp; Refunds</a>
                <a className="ft-link">Size Guide</a>
                <a className="ft-link">My Account</a>
              </div>
              <div>
                <div className="ft-col-ttl">Newsletter</div>
                <p style={{fontSize:"13px",color:"rgba(255,255,255,.5)",lineHeight:1.65,marginBottom:"16px"}}>Subscribe to get special offers and new collection updates.</p>
                <div className="nl-wrap">
                  <input className="nl-in" placeholder="Enter your email"/>
                  <button className="nl-btn" onclick="toast('🎉 Subscribed successfully!')">→</button>
                </div>
              </div>
            </div>
  <div className="footer-bottom">
    <span>© 2024 Sole &amp; Step. All Rights Reserved.</span>
    <div className="ft-pay">
      <div className="ft-pay-ic">VISA</div>
      <div className="ft-pay-ic" style={{color:"#eb001b"}}>MC</div>
      <div className="ft-pay-ic" style={{color:"#003087",background:"#fff"}}>PP</div>
      <div className="ft-pay-ic">AMEX</div>
    </div>
  </div>
</footer>

    )
}
export default Footer;