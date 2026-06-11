import { useState } from "react";
import PageHeader from "../components/pgHeader";
import '../styles/cart.css'
import { useParams } from "react-router-dom";
import { originProducts } from "../js/products";
function CartPage(){
    const [cart,setCart] =useState([]);
    const {id} = useParams();
    const product = [...originProducts].find(pro=>pro.id == id);
    if(product && !cart.some(item=>item.id ==product.id)){
        setCart(prevCart => [...prevCart],product)
    }
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
                                            <tr>
                                                <td>
                                                    <div class="ci-info">
                                                        <img class="ci-img" src={pro.img}/>
                                                        <div>
                                                            <div class="ci-name">{pro.name}</div>
                                                            <div class="ci-sub">Size: {pro.size.join(",")} · Color: Default</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="ci-price">{pro.price}$</div>
                                                </td>
                                                <td>
                                                    <button class="ci-rm" title="Remove">×</button>
                                                </td>
                                            </tr>
                                        )}
                                </tbody>
                            </table>
                            :
                            <div  className="empty-cart">
                                <div className="e-ico">🛍</div>
                                <p style={{marginBottom:"8px",fontSize:"16px"}}>Your cart is empty</p>
                                <p style={{fontSize:"13px",marginBottom:"28px"}}>Add some beautiful shoes to get started!</p>
                                <button className="btn btn-dark">Start Shopping</button>
                            </div>
                            }
                        {
                            
                        }
                    </div>
                    <div>
                        <div className="summary-box">
                            <h2 className="sum-ttl">Order Summary</h2>
                            <div className="sum-row"><span>Subtotal</span><span>$0.00</span></div>
                            <div className="sum-row"><span>Shipping</span><span>$0.00</span></div>
                            <div className="sum-row"><span>Tax (8%)</span><span >$0.00</span></div>
                            <div className="sum-row total"><span>Total</span><span>$0.00</span></div>
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