import '../../styles/soleHub.css';
import { useEffect, useState } from 'react';

import Sidebar from '../../components/soleHubComponents/sidebar';
import Topbar from '../../components/soleHubComponents/topbar.jsx';

import LoginPage from './login.jsx';
import DashboardPage from './dashboard.jsx';
import ProductsPage from './products.jsx';
import AddProductPage from './addProduct.jsx';
import CustomersPage from './customers.jsx';
import InventoryPage from './inventory.jsx';
import AnalyticsPage from './analytics.jsx';
import CouponsPage from './coupons.jsx';
import ReviewsPage from './reviews.jsx';
import SettingsPage from './settings.jsx';
import NotificationPage from './notification.jsx';

import { originProducts } from '../../js/products';
import { allCustomers } from '../../js/customers';
import { initialCoupons } from '../../js/coupons';
import { initialReviews } from '../../js/reviews';
import { loadOrSeed, save } from '../../js/storage';

const defaultSettings = {
    email:"az.zi.mo.fa@gmail.com",    
    password:"GoiGoeool",
    emailNotifications: true,
    lowStockAlerts: true
};

function SoleHubPage(){

// _____ STATE _____
// _____ Admin / Login _____
  const [admin,setAdmin] = useState(()=>{
    const saved = JSON.parse(localStorage.getItem("currentAdmin"))
    return saved ? saved:defaultSettings;
  }
       
  );
// _____ Admins (credentials). Seeded once from /admin.json, then fully
// local so a password change actually sticks on the next login.
  const [admins,setAdmins] = useState(()=>{
    const saved = localStorage.getItem("admins");
      return saved ? JSON.parse(saved) : null;
  });
  useEffect(()=>{
    if(admins !== null) return; // already loaded from storage
    fetch("/admin.json")
      .then(rs => rs.ok ? rs.json() : Promise.reject())
      .then(data => { setAdmins(data); save("admins", data); })
      .catch(() => setAdmins([]));
  },[admins]);

  const [isLogin,setIsLogin] = useState(
      localStorage.getItem("isLogin")
  );

// _____ Change Page _____
  const [page,setPage] = useState(isLogin && admin ? "Dashboard" : "Log in");



// _____ SOLEHUB _____
// _____ PRODUCTS _____
  const [products,setProducts] = useState(()=>loadOrSeed("products", originProducts));

// _____ Add / Edit / Remove Products
  const [isEditType,setIsEditType] = useState(false);
  const [editPro,setEditPro] = useState(null);
  const [editId,setEditId] = useState(null);
  function manageProduct(newProduct){{
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
}
  function removeProduct(id){
    setProducts(prev => prev.filter(product => product.id !== id));
  }
  function restockProduct(id, amount = 10){
    setProducts(prev => prev.map(p =>
      p.id === id ? { ...p, stock: (+p.stock || 0) + amount } : p
    ));
  }

// _____ CUSTOMERS _____
  const [customers,setCustomers] = useState(()=>loadOrSeed("customers", allCustomers));

// _____ Add / Block / Remove Customers
  function addCustomer(newCustomer){
    setCustomers(prev => [...prev, { id: Date.now(), orders:0, totalSpent:0, status:"active", ...newCustomer }]);
  }
  function removeCustomer(id){
    setCustomers(prev => prev.filter(c => c.id !== id));
  }
  function toggleCustomerStatus(id){
    setCustomers(prev => prev.map(c =>
      c.id === id ? { ...c, status: c.status === "active" ? "blocked" : "active" } : c
    ));
  }

// _____ COUPONS _____
  const [coupons,setCoupons] = useState(()=>loadOrSeed("coupons", initialCoupons));

// _____ Add / Remove Coupons
  function addCoupon(newCoupon){
    setCoupons(prev => [...prev, { id: Date.now(), ...newCoupon }]);
  }
  function removeCoupon(id){
    setCoupons(prev => prev.filter(c => c.id !== id));
  }

// _____ REVIEWS _____
  const [reviews,setReviews] = useState(()=>loadOrSeed("reviews", initialReviews));

  function setReviewStatus(id, status){
    setReviews(prev => prev.map(r => r.id === id ? { ...r, status } : r));
  }


// _____ Persist every slice when it's changes
  useEffect(()=>{ save("products", products) },[products]);
  useEffect(()=>{ save("customers", customers) },[customers]);
  useEffect(()=>{ save("coupons", coupons) },[coupons]);
  useEffect(()=>{ save("reviews", reviews) },[reviews]);
  useEffect(()=>{ save("admins", admins) },[admins]);
  useEffect(()=>{
    localStorage.setItem("isLogin", isLogin);
    localStorage.setItem("currentAdmin", JSON.stringify(admin));
  },[admin, isLogin]);

// _____ Hide Sidebars in these pages 
  const isFullScreenPage = page === "Log in" || page === "Add Product";

  return (
<div className="app-shell">
  {!isFullScreenPage &&
    <Sidebar setPage={setPage}
             currentPage={page}
             setIsLogin={setIsLogin}
             defaultSettings={defaultSettings}
             setAdmin={setAdmin}/>
  }
  <main className="main-area">
    <LoginPage display={page === "Log in" ? "block" : "none"}
               setPage={setPage}
               setAdmin={setAdmin}
               setIsLogin={setIsLogin}
               admins={admins}/>

    <AddProductPage 
              setPage={setPage}
              manageProduct={manageProduct}
              isEditType={isEditType}
              editPro={editPro}
              display={
                page === "Add Product"?"block":"none"}/>

    <div className="content">
      {!isFullScreenPage &&
        <Topbar currentPage={page} setPage={setPage} products={products}/>
      }

      <DashboardPage setPage={setPage}
                     products={products}
                     customers={customers}
                     display={page === "Dashboard" ? "block" : "none"}/>

      <ProductsPage  setPage={setPage}
                     products={products}
                     removeProduct={removeProduct}
                     setProducts={setProducts}
                     setIsEditType={setIsEditType}
                     setEditPro={setEditPro}
                     setEditId={setEditId}
                     display={
                       page === "Products"?"block":"none"}
                     />

      <CustomersPage customers={customers}
                     addCustomer={addCustomer}
                     removeCustomer={removeCustomer}
                     toggleCustomerStatus={toggleCustomerStatus}
                     display={page === "Customers" ? "block" : "none"}/>

      <InventoryPage products={products}
                     setPage={setPage}
                     restockProduct={restockProduct}
                     display={page === "Inventory" ? "block" : "none"}/>

      <AnalyticsPage products={products}
                     customers={customers}
                     display={page === "Analytics" ? "block" : "none"}/>

      <CouponsPage coupons={coupons}
                   addCoupon={addCoupon}
                   removeCoupon={removeCoupon}
                   display={page === "Coupons" ? "block" : "none"}/>

      <ReviewsPage reviews={reviews}
                   setReviewStatus={setReviewStatus}
                   display={page === "Reviews" ? "block" : "none"}/>

      <SettingsPage 
                    admins={admins}
                    setAdmins={setAdmins}
                    admin={admin}
                    setAdmin={setAdmin}
                    isLogin={isLogin}
                    display={page === "Settings" ? "block" : "none"}/>

      <NotificationPage products={products}
                        display={page === "Notification" ? "block" : "none"}/>
    </div>
  </main>
</div>
  )
}
export default SoleHubPage;
