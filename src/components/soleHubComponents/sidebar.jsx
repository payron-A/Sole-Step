
function Sidebar({setPage,currentPage,setIsLogin,setAdmin}){
  function isActive(page){
    return page === currentPage;
  }

    return (
<aside className="sidebar">
  <div className="sidebar-logo">
    <span className="logo-mark">N</span>
    <span className="logo-word">NovaDesk</span>
  </div>
  <ul className="sidebar-nav">
    <li>
      <a className={`nav-item 
            ${isActive("Dashboard")?"active":""}`}
          onClick={()=>{
            setPage("Dashboard")}}>
        <svg viewBox="0 0 24 24" 
          fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z"/>
        </svg>
        <span>Dashboard</span>
      </a>
    </li>
    <li>
      <a className={`nav-item 
            ${isActive("Products")?"active":""}`}
          onClick={()=>setPage("Products")}>
        <svg viewBox="0 0 24 24" fill="none" 
            stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8l9-5 9 5-9 5-9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/>
        </svg>
        <span>Products</span>
      </a>
    </li>
    <li>
      <a className={`nav-item 
            ${isActive("Customers")?"active":""}`}
          onClick={()=>setPage("Customers")}>
        <svg viewBox="0 0 24 24" fill="none" 
            stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3.4"/><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6"/><circle cx="17.5" cy="8.5" r="2.6"/><path d="M16 14.2c2.7.5 4.5 2.6 4.5 5.8"/>
        </svg>
        <span>Customers</span>
        </a>
    </li>
    <li>
      <a className={`nav-item 
            ${isActive("Inventory")?"active":""}`}
          onClick={()=>setPage("Inventory")}>
        <svg viewBox="0 0 24 24" fill="none" 
            stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5"/>
        </svg>
        <span>Inventory</span>
      </a>
    </li>
    <li>
      <a className={`nav-item 
            ${isActive("Analytics")?"active":""}`}
          onClick={()=>setPage("Analytics")}>
        <svg viewBox="0 0 24 24" fill="none" 
          stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20V10M11 20V4M18 20v-7"/><path d="M2 20h20"/>
        </svg>
        <span>Analytics</span>
      </a>
    </li>
    <li>
      <a className={`nav-item 
            ${isActive("Coupons")?"active":""}`}
          onClick={()=>setPage("Coupons")}>
        <svg viewBox="0 0 24 24" fill="none" 
          stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M11 3l9 9-8 8-9-9V4h7z"/><circle cx="8" cy="8" r="1.3"/>
        </svg>
        <span>Coupons</span>
      </a>
    </li>
     <li>
      <a className={`nav-item 
            ${isActive("Reviews")?"active":""}`}
          onClick={()=>setPage("Reviews")}>
        <svg viewBox="0 0 24 24" fill="none" 
          stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l2.7 5.9 6.3.7-4.8 4.3 1.4 6.3L12 17l-5.6 3.2 1.4-6.3-4.8-4.3 6.3-.7L12 3z"/>
        </svg>
        <span>Reviews</span>
      </a>
    </li>
    <li>
      <a className={`nav-item 
            ${isActive("Settings")?"active":""}`} 
          onClick={()=>setPage("Settings")}>
        <svg viewBox="0 0 24 24" fill="none" 
          stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3.2"/><path d="M19 12a7 7 0 0 0-.2-1.6l2-1.6-2-3.4-2.4.8a7 7 0 0 0-2.7-1.6L13.2 2h-2.4l-.5 2.6a7 7 0 0 0-2.7 1.6l-2.4-.8-2 3.4 2 1.6a7 7 0 0 0 0 3.2l-2 1.6 2 3.4 2.4-.8a7 7 0 0 0 2.7 1.6l.5 2.6h2.4l.5-2.6a7 7 0 0 0 2.7-1.6l2.4.8 2-3.4-2-1.6c.13-.5.2-1 .2-1.6z"/>
        </svg>
        <span>Settings</span>
      </a>
    </li>
  </ul>
  <div className="sidebar-foot">
    <a className="nav-item" 
        onClick={()=>{
          setPage("Log in");
          setIsLogin(false);
          setAdmin(null);
          
        }}>
      <svg viewBox="0 0 24 24" fill="none" 
          stroke="currentColor" strokeWidth="1.8" 
          strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
          <path d="M16 17l5-5-5-5"/><path d="M21 12H9"/>
      </svg>
      <span>Log out</span>
    </a>
  </div>
</aside>

    )
}
export default Sidebar;