import '../styles/footer.css';
import { Link } from 'react-router-dom';
function Footer(){
    return(
        <footer>
            <div className="footer-grid">
              <div>
                <Link to="/"><h2 className="ft-brand">Sole &amp; <em>Step</em></h2></Link>
                <p className="ft-desc">Premium shoes &amp; socks for women and kids. Comfort. Style. Confidence.</p>
                <div className="social-row">
                  <div className="soc-btn"><i className="fa-brands fa-facebook-f"></i></div>
                  <div className="soc-btn" style={{fontSize:"12px"}}>𝕏</div>
                  <div className="soc-btn" style={{fontSize:"11px"}}>▶</div>
                  <div className="soc-btn" style={{fontSize:"11px"}}><i className="fa-regular fa-envelope"></i></div>
                </div>
              </div>
              <div>
                <div className="ft-col-ttl">Shop</div>
                <Link to="/women.jsx" className="ft-link">Women</Link>
                <Link to="/kids.jsx" className="ft-link">Kids</Link>
                <Link to="/newArrivals.jsx" className="ft-link">New Arrivals</Link>
                <Link to="/sale.jsx" className="ft-link">Sale</Link>
              </div>
              <div>
                <div className="ft-col-ttl">Customer Care</div>
                <Link to="https://whatsApp.com" className="ft-link">Contact Us</Link>
                <Link to="https://www.monsoon.co.uk/size-guide.html" className="ft-link">Size Guide</Link>
                <Link to="https://facebook.com" className="ft-link">Dev Account</Link>
              </div>
              <div>
                <div className="ft-col-ttl">Newsletter</div>
                <p style={{fontSize:"13px",color:"rgba(255,255,255,.5)",lineHeight:1.65,marginBottom:"16px"}}>Subscribe to get special offers and new collection updates.</p>
                <div className="nl-wrap">
                  <input className="nl-in" placeholder="Enter your email"/>
                  <button className="nl-btn">→</button>
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