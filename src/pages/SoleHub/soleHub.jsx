import '../../styles/soleHub.css';
import Sidebar from '../../components/soleHubComponents/sidebar';
import Topbar from '../../components/soleHubComponents/topbar';
function SoleHubPage(){
    return (
<div className="app-shell">
  <Sidebar/>
  <main className="main-area">
      <div className="content">
        <section className="page">
          <Topbar/>
        </section>
      </div>
  </main>
</div>)
}
export default SoleHubPage;