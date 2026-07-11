import '../../styles/soleHub.css';
import DashboardPage from './dashboard.jsx';
import ProductsPage from './products.jsx';
import  CustomersPage from './customers.jsx'
import Sidebar from '../../components/soleHubComponents/sidebar';
import InventoryPage from './inventory.jsx';
function SoleHubPage(){
    return (
<div className="app-shell">
  <Sidebar/>
  <main className="main-area">
    <DashboardPage/>
    <ProductsPage/>
    <CustomersPage/>
    <InventoryPage/>
  </main>
</div>
)
}
export default SoleHubPage;