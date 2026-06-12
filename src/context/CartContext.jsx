import { createContext, useContext, useState ,useRef} from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const toastRef = useRef();

  function showToast(msg) {
    toastRef.current.textContent = msg;
    toastRef.current.classList.add("show");
    setTimeout(() => {
      toastRef.current.classList.remove("show");
    }, 2000);
  }
  function addToCart(product) {
    if(cart.some(item=>item.id === product.id))return showToast("Already in cart!");
    setCart(prev =>[...prev, product]);
    showToast("Added to cart ✓");
  }

  function removeFromCart(id) {
    setCart(prev => prev.filter(item => item.id !== id));
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart,showToast }}>
      {children}
       <div className="toast" ref={toastRef}></div>
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}