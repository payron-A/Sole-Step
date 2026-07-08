import { useRef } from 'react';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/wishlistContext';
function Navbar(){
    const { wishlist } = useWishlist();
    const { cart } = useCart();
    const navbarLinks = useRef();
    const navbarIcon = useRef();
    function hideNavbar(){
      navbarLinks.current.style.right = "-200px";
      navbarIcon.current.classList.remove("active");
    }
    function showNavbar(){
        navbarIcon.current.classList.toggle("active");
        if(navbarIcon.current.classList.contains("active")){
            navbarLinks.current.style.right = "0";
        }
        else{
            hideNavbar();
        }
    }
    return(
        <nav>
            <Link to='/'><div className="nav-logo">Sole &amp; <em>Step</em></div></Link>
            <ul className="nav-links"
                ref={navbarLinks}>
              <li><Link onClick={hideNavbar} to='/'>Home</Link></li>
              <li><Link onClick={hideNavbar} to='/soleHub'>Shop</Link></li>
              <li><Link onClick={hideNavbar} to='/women'>Women</Link></li>
              <li><Link onClick={hideNavbar} to='/kids'>Kids</Link></li>
              <li><Link onClick={hideNavbar} to='/newArrivals'>New Arrivals</Link></li>
              <li><Link onClick={hideNavbar} to='/sale'className="sale">Sale</Link></li>
            </ul>
            <div className="nav-icons">
            <Link to="/wishlist" className="nav-icon" title="Wishlist" style={{position:'relative'}}>
                <svg width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
                {wishlist.length > 0 && <span className="cart-badge">{wishlist.length}</span>}
            </Link>
              
              <Link to="/cart">
                <button className="nav-icon" title="Cart">
                <svg width="19" height="19" 
                     fill="none" stroke="currentColor" 
                     strokeWidth="1.8" viewBox="0 0 24 24">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                    <line x1="3" y1="6" x2="21" y2="6"/>
                    <path d="M16 10a4 4 0 0 1-8 0"/>
                </svg>
                <span className="cart-badge">
                    {cart.length}
                </span>
              </button>
              </Link>
              <button className="nav-icon nav-menu" title="menu"
                      ref={navbarIcon}
                      onClick={showNavbar}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    )
}
export default Navbar;