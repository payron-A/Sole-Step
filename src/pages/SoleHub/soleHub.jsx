import '../../styles/soleHub.css';
import DashboardPage from './dashboard.jsx';
import Topbar from '../../components/soleHubComponents/topbar.jsx';
import ProductsPage from './products.jsx';
import  CustomersPage from './customers.jsx'
import Sidebar from '../../components/soleHubComponents/sidebar';
import InventoryPage from './inventory.jsx';
import AnalyticsPage from './analytics.jsx';
import CouponsPage from './coupons.jsx';
import ReviewsPage from './reviews.jsx';
import SettingsPage from './settings.jsx';
import LoginPage from './login.jsx';
import AddProductPage from './addProduct.jsx';
import NotificationPage from './notification.jsx';
import { useEffect, useState } from 'react';
import { originProducts } from '../../js/products';
function SoleHubPage(){

  // _____ STATE _____
  // _____ Current Admin
  const [admin,setAdmin] = useState(
      JSON.parse(localStorage.getItem("currentAdmin"))
  );

  // _____ Change Page State  
  const [isLogin,setIsLogin] = useState(
      localStorage.getItem("isLogin") || false
  )
  const [page,setPage] = useState(isLogin && admin?
    "Dashboard":"Log in"
  );

  // _____ Products
  const [products,setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || originProducts);
  useEffect(()=>{
    localStorage.setItem("products",JSON.stringify(products))
  },[products])

  function manageProduct(newProduct){
    if(!isEditType){
      setProducts(prev => [...prev, { id: Date.now(), ...newProduct }]);
    }else{
      const editProducts = [...products]
      editProducts.splice(editId,1,newProduct);
      setProducts(editProducts)
    }
    setPage("Products");
    setEditPro(null);
    setIsEditType(false);
  }
  
  useEffect(()=>{
    localStorage.setItem("isLogin",isLogin);
    localStorage.setItem("currentAdmin",JSON.stringify(admin));
  },[admin][isLogin])
  // _____ Edit Product
  const [isEditType,setIsEditType] = useState(false);
  const [editPro,setEditPro] = useState(null);
  const [editId,setEditId] = useState(null);
    return (
<div className="app-shell">
  {page === "Log in" || page === "Add Product"?
    "":
    <Sidebar setPage={setPage}
             currentPage={page}
             setIsLogin={setIsLogin}
             setAdmin={setAdmin}/>
  }
  <main className="main-area">
    <LoginPage display={page === "Log in"?"block":"none"}
               setPage={setPage}
               setAdmin={setAdmin}
               setIsLogin={setIsLogin}/>

    <AddProductPage 
              setPage={setPage}
              manageProduct={manageProduct}
              isEditType={isEditType}
              editPro={editPro}
              display={
                page === "Add Product"?"block":"none"}/>

    <div className="content">
          {page === "Log in" || page === "Add Product"?
            "":<Topbar currentPage={page}/>
            }
          <DashboardPage 
            setPage={setPage}
            display={
              page === "Dashboard"?"block":"none"}/>
          <ProductsPage 
            setPage={setPage}
            products={products}
            setProducts={setProducts}
            setIsEditType={setIsEditType}
            setEditPro={setEditPro}
            setEditId={setEditId}
            display={
              page === "Products"?"block":"none"}
            />
          <CustomersPage display={
            page === "Customers"?"block":"none"}/> 
          <InventoryPage display={
            page === "Inventory"?"block":"none"}/>
          <AnalyticsPage display={
            page === "Analytics"?"block":"none"}/>
          <CouponsPage display={
            page === "Coupons"?"block":"none"}/>
          <ReviewsPage display={
            page === "Reviews"?"block":"none"}/>
          <SettingsPage display={
            page === "Settings"?"block":"none"}/>
          <NotificationPage display={
            page === "Notification"?"block":"none"}/>
    </div>
  </main>
</div>
)
}
export default SoleHubPage;