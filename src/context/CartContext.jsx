import { createContext, useContext, useState ,useRef} from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  function addToCart(product) {
    if(cart.some(item=>item.id === product.id))return showToast("Already in cart!");
    setCart(prev =>[...prev, product]);
    showToast(`Added ${product.title} to cart ✓`);
  }
  function removeFromCart(id) {
    setCart(prev => prev.filter(item => item.id !== id));
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart,setCart}}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}