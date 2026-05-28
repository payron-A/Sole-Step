import Navbar from "./components/navbar";
import { Routes,Route } from "react-router-dom";
import HomePage from "./pages/home";
import ShopPage from "./pages/shop";
import WomenPage from "./pages/women";
import KidsPage from "./pages/kids";
import NewArrivalsPage from "./pages/newArrivals";
import SalePage from "./pages/sale";
import ProductDetails from "./pages/productDetails.jsx";
import CartPage from "./pages/Cart.jsx";
import WishlistPage from "./pages/wishList.jsx";
import AboutPage from './pages/about';
import { WishlistProvider } from "./context/wishlistContext";
import SoleHubPage from "./pages/SoleHub/soleHub.jsx";
function App(){
  return (
    <>
    <WishlistProvider>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/shop" element={<ShopPage/>}/>
      <Route path="/women" element={<WomenPage/>}/>
      <Route path="/kids" element={<KidsPage/>}/>
      <Route path="/newArrivals" element={<NewArrivalsPage/>}/>
      <Route path="/sale" element={<SalePage/>}/>
      <Route path="/cart" element={<CartPage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/product/:id" element={<ProductDetails/>}/>
      <Route path="/wishList" element={<WishlistPage/>}/>
      <Route path="/soleHub" element={<SoleHubPage/>}/>
    </Routes>
    </WishlistProvider>
    </>
  )
}
export default App;