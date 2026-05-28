import '../../styles/soleHub.css';
import DashboardPage from './dashboard.jsx';
import ProductsPage from './products.jsx';
import  CustomersPage from './customers.jsx'
import Sidebar from '../../components/soleHubComponents/sidebar';
import InventoryPage from './inventory.jsx';
import AnalyticsPage from './analytics.jsx';
import CouponsPage from './coupons.jsx';
import ReviewsPage from './reviews.jsx';
import SettingsPage from './settings.jsx';
function SoleHubPage(){
    return (
<div className="app-shell">
  <Sidebar/>
  <main className="main-area">
    <DashboardPage/>
    <ProductsPage/>
    <CustomersPage/>
    <InventoryPage/>
    <AnalyticsPage/>
    <CouponsPage/>
    <ReviewsPage/>
    <SettingsPage/>
  </main>
</div>
)
}
export default SoleHubPage;