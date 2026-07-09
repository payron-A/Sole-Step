import '../../styles/soleHub.css';
import Sidebar from '../../components/soleHubComponents/sidebar';
import Topbar from '../../components/soleHubComponents/topbar';
function SoleHubPage(){
    return (
<div className="app-shell">
  <Sidebar/>
  <main className="main-area">
    <div className="content">
      <Topbar/>
      <section className="page">
      <div class="stat-grid">
        <div class="stat-card">
          <span class="stat-label">Revenue</span>
          <span class="stat-value">$18,540</span>
          <span class="stat-delta up">+12.4%</span>
        </div>
      <div class="stat-card">
        <span class="stat-label">Orders</span>
        <span class="stat-value">243</span>
        <span class="stat-delta up">+6.1%</span>
      </div>
      <div class="stat-card">
        <span class="stat-label">Customers</span>
        <span class="stat-value">124</span>
        <span class="stat-delta up">+3.8%</span>
      </div>
      <div class="stat-card">
        <span class="stat-label">Products</span>
        <span class="stat-value">68</span>
        <span class="stat-delta down">-1.2%</span>
      </div>
    </div>
    <div class="dash-grid">
    <div class="panel sales-panel">
        <div class="panel-head">
          <h3>Sales overview</h3>
          <select class="mini-select">
            <option>Last 8 months</option>
          </select>
        </div>
        <svg viewBox="0 0 560 200" class="sales-chart" preserveAspectRatio="none">
          <defs>
              <linearGradient  x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="var(--rose)" stop-opacity=".35"/>
                <stop offset="100%" stop-color="var(--rose)" stop-opacity="0"/>
              </linearGradient>
          </defs>
          <polyline fill="url(#salesFill)" stroke="none" points="0,160 80,140 160,150 240,90 320,110 400,60 480,80 560,40 560,200 0,200"/>
          <polyline fill="none" stroke="var(--rose)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" points="0,160 80,140 160,150 240,90 320,110 400,60 480,80 560,40"/>
        </svg>
        <div class="chart-x-labels"><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span></div>
      </div>
      <div class="panel"><div class="panel-head"><h3>Best selling products</h3><a href="products.html" class="see-all">See all</a></div><ul class="mini-list"><li><span class="mini-thumb"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8l9-5 9 5-9 5-9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/></svg></span><div><b>Nike Air Max</b><small>3 left</small></div><span class="mini-val">$345</span></li><li><span class="mini-thumb"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8l9-5 9 5-9 5-9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/></svg></span><div><b>Nike Air Max</b><small>5 left</small></div><span class="mini-val">$805</span></li><li><span class="mini-thumb"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8l9-5 9 5-9 5-9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/></svg></span><div><b>Nike Air Max</b><small>4 left</small></div><span class="mini-val">$529</span></li></ul></div>
      <div class="panel"><div class="panel-head"><h3>Recent orders</h3><a href="orders.html" class="see-all">See all</a></div><ul class="mini-list"><li><span class="mini-thumb dot">#</span><div><b>Ahmed</b><small>Jan 12, 2021</small></div><span class="mini-val">$1,500</span></li><li><span class="mini-thumb dot">#</span><div><b>Customer</b><small>Jan 12, 2021</small></div><span class="mini-val">$3,500</span></li><li><span class="mini-thumb dot">#</span><div><b>Ahmed</b><small>Feb 15, 2021</small></div><span class="mini-val">$1,900</span></li></ul></div>
      <div class="panel"><div class="panel-head"><h3>Tasks to follow up</h3></div><ul class="task-list"><li><input type="checkbox"/><span>Reply to follow-up comment</span></li><li><input type="checkbox"/><span>Restock low stock items</span></li><li><input type="checkbox"/><span>Follow up on order #00024</span></li></ul></div>
    </div>
        </section>
      </div>
  </main>
</div>)
}
export default SoleHubPage;