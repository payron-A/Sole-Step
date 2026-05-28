import { createContext, useContext, useEffect, useState } from 'react';
import { useToast } from '../context/toastContext';
const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] =useState(JSON.parse(localStorage.getItem("wishList"))||[]);
  useEffect(()=>{
    localStorage.setItem("wishList",JSON.stringify(wishlist));
  },[wishlist])
  const {showToast} = useToast();
  function toggleWishlist(product) {
    const isFind = [...wishlist].find(p => p.id === product.id);
    setWishlist(isFind? [...wishlist].filter(p => p.id !== product.id)
                      : [...wishlist, product]
    );
    !isFind?showToast(`Added ${product.name} to WishList`)
          :showToast(`Remove ${product.name} to WishList`)
  }

  function isWishlisted(id) {
    return wishlist.some(p => p.id === id);
  }

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist, isWishlisted }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}