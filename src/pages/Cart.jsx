import { useCart } from '../context/CartContext';
import PageHeader from "../components/pgHeader";
import '../styles/cart.css';

function CartPage(){
    const { cart, removeFromCart } = useCart();

    const subtotal = cart.reduce((sum, item) => sum + Number(item.price), 0);
    const shipping = subtotal > 0 ? 10 : 0;
    const tax = +(subtotal * 0.08).toFixed(2);
    const total = +(subtotal + shipping + tax).toFixed(2);

    return(
        <div className="page">
            <PageHeader currentPage="Cart"/>
            <div className="cart-wrap">
                <h2 style={{marginBottom:"40px"}}>Your Cart</h2>
                <div className="cart-layout">
                    <div>
                        {cart.length > 0 ? 
                            <table style={{padding:"1rem"}}>
                                <thead>
                                    <tr className="cart-th">
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map(pro=>
                                        <tr key={pro.id}>
                                            <td>
                                                <div className="ci-info">
                                                    <img className="ci-img" src={pro.image} alt={pro.title}/>
                                                    <div>
                                                        <div className="ci-name">{pro.title}</div>
                                                        <div className="ci-sub">{pro.category}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="ci-price">{pro.price}$</div>
                                            </td>
                                            <td>
                                                <button className="ci-rm" onClick={() => removeFromCart(pro.id)}>×</button>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                            :
                            <div className="empty-cart">
                                <div className="e-ico">🛍</div>
                                <p style={{marginBottom:"8px",fontSize:"16px"}}>Your cart is empty</p>
                                <p style={{fontSize:"13px",marginBottom:"28px"}}>Add some beautiful shoes to get started!</p>
                                <button className="btn btn-dark">Start Shopping</button>
                            </div>
                        }
                    </div>
                    <div>
                        <div className="summary-box">
                            <h2 className="sum-ttl">Order Summary</h2>
                            <div className="sum-row"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
                            <div className="sum-row"><span>Shipping</span><span>${shipping.toFixed(2)}</span></div>
                            <div className="sum-row"><span>Tax (8%)</span><span>${tax}</span></div>
                            <div className="sum-row total"><span>Total</span><span>${total}</span></div>
                            <div className="coupon-w">
                                <input className="coup-in" placeholder="Coupon code"/>
                                <button className="coup-btn">Apply</button>
                            </div>
                            <button className="btn btn-rose" style={{width:"100%",justifyContent:"center"}}>Proceed to Checkout →</button>
                            <button className="btn btn-outline" style={{width:"100%",justifyContent:"center",marginTop:"10px"}}>Continue Shopping</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CartPage;