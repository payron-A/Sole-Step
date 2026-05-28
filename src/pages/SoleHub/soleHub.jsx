import '../../styles/soleHub.css';
import DashboardPage from './dashboard.jsx';
import ProductsPage from './products.jsx';
import Sidebar from '../../components/soleHubComponents/sidebar';
function SoleHubPage(){
    return (
<div className="app-shell">
  <Sidebar/>
  <main className="main-area">
    <DashboardPage/>
    <ProductsPage/>
  </main>
</div>)
}
export default SoleHubPage;