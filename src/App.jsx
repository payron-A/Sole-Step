import Navbar from "./components/navbar";
import { Routes,Route } from "react-router-dom";
import HomePage from "./pages/home";
import ShopPage from "./pages/shop";
import WomenPage from "./pages/women";
import KidsPage from "./pages/kids";
import NewArrivalsPage from "./pages/newArrivals";
import SalePage from "./pages/sale";
import ProductDetails from "./pages/productDetails.jsx";
import { useRef } from "react";
import CartPage from "./pages/Cart.jsx";
function App(){
  const toast = useRef();
  return (
    <>
    <Navbar toast={toast}/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/shop.jsx" element={<ShopPage/>}/>
      <Route path="/women.jsx" element={<WomenPage/>}/>
      <Route path="/kids.jsx" element={<KidsPage/>}/>
      <Route path="/newArrivals.jsx" element={<NewArrivalsPage/>}/>
      <Route path="/sale.jsx" element={<SalePage/>}/>
      <Route path="/cart/:id" element={<ProductDetails/>}/>
      <Route path="/product/:id" element={<CartPage/>}/>
    </Routes>
    <div className="toast" ref={toast}></div>
    </>
  )
}
export default App;