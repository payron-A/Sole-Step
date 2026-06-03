import Navbar from "./components/navbar";
import { Routes,Route } from "react-router-dom";
import HomePage from "./pages/home";
import ShopPage from "./pages/shop";
import WemonPage from "./pages/wemon";
import KidsPage from "./pages/kids";
import NewArrivalsPage from "./pages/newArrivals";
import SalePage from "./pages/sale";
function App(){
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/shop.jsx" element={<ShopPage/>}/>
      <Route path="/wemon.jsx" element={<WemonPage/>}/>
      <Route path="/kids.jsx" element={<KidsPage/>}/>
      <Route path="/newArrivals.jsx" element={<NewArrivalsPage/>}/>
      <Route path="/sale.jsx" element={<SalePage/>}/>
      
    </Routes>
    </>
  )
}
export default App;