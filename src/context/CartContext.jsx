import { createContext, useContext, useState,useEffect} from "react";
const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart"))||[]);
    useEffect(()=>{
      localStorage.setItem("cart",JSON.stringify(cart));
    },[cart])
  function addToCart(product) {
    if(cart.some(item=>item.id === product.id))return ;
    setCart(prev =>[...prev, product]);
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