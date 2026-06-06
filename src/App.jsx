import Navbar from "./components/navbar";
import { Routes,Route } from "react-router-dom";
import HomePage from "./pages/home";
import ShopPage from "./pages/shop";
import WomenPage from "./pages/women";
import KidsPage from "./pages/kids";
import NewArrivalsPage from "./pages/newArrivals";
import SalePage from "./pages/sale";
import { useRef } from "react";
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
      
    </Routes>
    <div className="toast" ref={toast}>no comment</div>
    </>
  )
}
export default App;