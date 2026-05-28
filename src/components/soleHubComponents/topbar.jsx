

function Topbar({currentPage,setPage,products=[]}){

  const lowStockCount = products.filter(p => +p.stock < 5).length;

    return (
<header className="topbar">
  <h2 className="topbar-title">
    {currentPage}
  </h2>
  <div className="topbar-actions">
    <a className={`icon-btn ${lowStockCount > 0 ? "has-dot" : ""}`}
        onClick={()=>{
          setPage("Notification")
        }}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" 
        strokeLinecap="round" strokeLinejoin="round"><path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6z"/><path d="M10 20a2 2 0 0 0 4 0"/>
      </svg>
    </a>
    <button className="icon-btn">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" 
        strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2"/>
        <path d="M3 7l9 6 9-6"/>
      </svg>
    </button>
    <div className="avatar-chip"
         onClick={()=>setPage("Settings")}
         style={{cursor:"pointer"}}>
      <svg className="img"
          viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="1.8" 
          strokeLinecap="round"><circle cx="12" cy="8" 
          r="4"/><path d="M4 21v-1a8 8 0 0 1 16 0v1"/>
      </svg>
      <span>admin</span>
    </div>
  </div>
</header>
    )
}
export default Topbar;