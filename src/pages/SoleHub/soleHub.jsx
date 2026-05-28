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
import { useState } from 'react';
function SoleHubPage(){
  const [page,setPage] = useState("Dashboard");
    return (
<div className="app-shell">
  <Sidebar changePage={setPage}/>
  <main className="main-area">
    
    <div className="content">
      
      <section className="page">
        <Topbar currentPage={page}/>
        <div style={{display:page === "Dashboard"?"block":"none"}}>
          <DashboardPage/>
        </div> 
        <div style={{display:page === "Products"?"block":"none"}}>
          <ProductsPage/>
        </div> 
        <div style={{display:page === "Customers"?"block":"none"}}>
          <CustomersPage />
        </div> 
        <div style={{display:page === "Inventory"?"block":"none"}}>
          <InventoryPage/>
        </div> 
        <div style={{display:page === "Analytics"?"block":"none"}}>
          <AnalyticsPage/>
        </div> 
        <div style={{display:page === "Coupons"?"block":"none"}}>
          <CouponsPage/>
        </div> 
        <div style={{display:page === "Reviews"?"block":"none"}}>
          <ReviewsPage/>
        </div> 
        <div style={{display:page === "Settings"?"block":"none"}}>
          <SettingsPage/>
        </div>
        <div style={{display:page === "Log in"?"block":"none"}}>
          <LoginPage/>
        </div>
        <div style={{display:page === "Add Product"?"block":"none"}}>
          <AddProductPage/>
        </div>
        <div style={{display:page === "Notification"?"block":"none"}}>
          <NotificationPage/>
        </div>
        
        
        
        
        
        
        
      </section>
    </div>
   
  </main>
</div>
)
}
export default SoleHubPage;