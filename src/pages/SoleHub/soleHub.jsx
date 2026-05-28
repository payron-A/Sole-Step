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
  const [page,setPage] = useState("Log in");
    return (
<div className="app-shell">
  {page === "Log in"?
    "":<Sidebar setPage={setPage}currentPage={page}/>
  }
  <main className="main-area">
    <div className="content">
          {page === "Log in"?
            "":<Topbar currentPage={page}/>
            }
          <DashboardPage display={
            page === "Dashboard"?"block":"none"}/>
          <ProductsPage display={
            page === "Products"?"block":"none"}/>
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
          <LoginPage display={
            page === "Log in"?"block":"none"}/>
          <AddProductPage display={
            page === "Add Product"?"block":"none"}/>
          <NotificationPage display={
            page === "Notification"?"block":"none"}/>
    </div>
  </main>
</div>
)
}
export default SoleHubPage;