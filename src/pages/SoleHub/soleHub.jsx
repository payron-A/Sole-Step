import '../../styles/soleHub.css';
function SoleHubPage(){
    return <div className="app-shell">
  
<aside className="sidebar">
  <div className="sidebar-logo"><span className="logo-mark">S</span><span className="logo-word">SoleHub</span></div>
  <nav className="sidebar-nav">
    <a className="nav-item active" href="dashboard.html"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z"/></svg><span>Dashboard</span></a>
<a className="nav-item" href="products.html"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8l9-5 9 5-9 5-9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/></svg><span>Products</span></a>
<a className="nav-item" href="orders.html"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M2 3h3l2.4 12.2a2 2 0 0 0 2 1.6h8.4a2 2 0 0 0 2-1.6L22 7H6"/></svg><span>Orders</span></a>
<a className="nav-item" href="customers.html"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3.4"/><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6"/><circle cx="17.5" cy="8.5" r="2.6"/><path d="M16 14.2c2.7.5 4.5 2.6 4.5 5.8"/></svg><span>Customers</span></a>
<a className="nav-item" href="inventory.html"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5"/></svg><span>Inventory</span></a>
<a className="nav-item" href="analytics.html"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20V10M11 20V4M18 20v-7"/><path d="M2 20h20"/></svg><span>Analytics</span></a>
<a className="nav-item" href="coupons.html"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M11 3l9 9-8 8-9-9V4h7z"/><circle cx="8" cy="8" r="1.3"/></svg><span>Coupons</span></a>
<a className="nav-item" href="reviews.html"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l2.7 5.9 6.3.7-4.8 4.3 1.4 6.3L12 17l-5.6 3.2 1.4-6.3-4.8-4.3 6.3-.7L12 3z"/></svg><span>Reviews</span></a>
<a className="nav-item" href="settings.html"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3.2"/><path d="M19 12a7 7 0 0 0-.2-1.6l2-1.6-2-3.4-2.4.8a7 7 0 0 0-2.7-1.6L13.2 2h-2.4l-.5 2.6a7 7 0 0 0-2.7 1.6l-2.4-.8-2 3.4 2 1.6a7 7 0 0 0 0 3.2l-2 1.6 2 3.4 2.4-.8a7 7 0 0 0 2.7 1.6l.5 2.6h2.4l.5-2.6a7 7 0 0 0 2.7-1.6l2.4.8 2-3.4-2-1.6c.13-.5.2-1 .2-1.6z"/></svg><span>Settings</span></a>
 
  </nav>
  <div className="sidebar-foot">
    <a className="nav-item" href="login.html"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/></svg><span>Log out</span></a>
  </div>
</aside>
 
  <main className="main-area">
    
<header className="topbar">
  <h2 className="topbar-title">Dashboard</h2>
  <div className="topbar-actions">
    <button className="icon-btn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M21 21l-4.3-4.3"/></svg></button>
    <a className="icon-btn has-dot" href="notifications.html"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6z"/><path d="M10 20a2 2 0 0 0 4 0"/></svg></a>
    <button className="icon-btn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg></button>
    <div className="avatar-chip"><img src="https://i.pravatar.cc/64?img=13" alt=""/><span>Admin</span></div>
  </div>
</header>
 
    <div className="content">
      <section className="page">
        
<p className="greeting">Good morning, Admin <span className="wave">👋</span></p>
<div className="stat-grid">
  <div className="stat-card"><span className="stat-label">Revenue</span><span className="stat-value">$18,540</span><span className="stat-delta up">+12.4%</span></div>
  <div className="stat-card"><span className="stat-label">Orders</span><span className="stat-value">243</span><span className="stat-delta up">+6.1%</span></div>
  <div className="stat-card"><span className="stat-label">Customers</span><span className="stat-value">124</span><span className="stat-delta up">+3.8%</span></div>
  <div className="stat-card"><span className="stat-label">Products</span><span className="stat-value">68</span><span className="stat-delta down">-1.2%</span></div>
</div>
<div className="dash-grid">
  <div className="panel sales-panel">
    <div className="panel-head"><h3>Sales overview</h3><select className="mini-select"><option>Last 8 months</option></select></div>
    <svg viewBox="0 0 560 200" className="sales-chart" preserveAspectRatio="none">
      <defs><linearGradient id="salesFill" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="var(--rose)" stopOpacity=".35"/>
        <stop offset="100%" stopColor="var(--rose)" stopOpacity="0"/>
      </linearGradient></defs>
      <polyline fill="url(#salesFill)" stroke="none" points="0,160 80,140 160,150 240,90 320,110 400,60 480,80 560,40 560,200 0,200"/>
      <polyline fill="none" stroke="var(--rose)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" points="0,160 80,140 160,150 240,90 320,110 400,60 480,80 560,40"/>
    </svg>
    <div className="chart-x-labels"><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span></div>
  </div>
  <div className="panel"><div className="panel-head"><h3>Best selling products</h3><a href="products.html" className="see-all">See all</a></div><ul className="mini-list"><li><span className="mini-thumb"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8l9-5 9 5-9 5-9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/></svg></span><div><b>Nike Air Max</b><small>3 left</small></div><span className="mini-val">$345</span></li><li><span className="mini-thumb"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8l9-5 9 5-9 5-9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/></svg></span><div><b>Nike Air Max</b><small>5 left</small></div><span className="mini-val">$805</span></li><li><span className="mini-thumb"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8l9-5 9 5-9 5-9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/></svg></span><div><b>Nike Air Max</b><small>4 left</small></div><span className="mini-val">$529</span></li></ul></div>
  <div className="panel"><div className="panel-head"><h3>Recent orders</h3><a href="orders.html" className="see-all">See all</a></div><ul className="mini-list"><li><span className="mini-thumb dot">#</span><div><b>Ahmed</b><small>Jan 12, 2021</small></div><span className="mini-val">$1,500</span></li><li><span className="mini-thumb dot">#</span><div><b>Customer</b><small>Jan 12, 2021</small></div><span className="mini-val">$3,500</span></li><li><span className="mini-thumb dot">#</span><div><b>Ahmed</b><small>Feb 15, 2021</small></div><span className="mini-val">$1,900</span></li></ul></div>
  <div className="panel"><div className="panel-head"><h3>Tasks to follow up</h3></div><ul className="task-list"><li><input type="checkbox"/><span>Reply to follow-up comment</span></li><li><input type="checkbox"/><span>Restock low stock items</span></li><li><input type="checkbox"/><span>Follow up on order #00024</span></li></ul></div>
</div>
 
      </section>
    </div>
  </main>
</div>
}
export default SoleHubPage;