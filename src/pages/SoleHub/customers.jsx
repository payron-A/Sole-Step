
function CustomersPage(){    
    return ( 
<>
<div className="toolbar">
    <div className="search-box">
        <svg viewBox="0 0 24 24" fill="none" 
            stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="10.5" cy="10.5" r="6.5"/><path d="M21 21l-4.3-4.3"/>
        </svg>
        <input placeholder="Search customers…"/>
    </div>
</div>
<div className="customer-grid">
    <div className="customer-card">
        <div className="customer-head">
            <svg className="img"
                viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.8" 
                strokeLinecap="round"><circle cx="12" cy="8" 
                r="4"/><path d="M4 21v-1a8 8 0 0 1 16 0v1"/>
            </svg>
            <div>
                <h4>Ahmed</h4>
                <small>12 orders · $1500</small>
            </div>
        </div>
        <div className="customer-body">
            <div>
                <span>Address</span>
                <p>633 Oxford Ct, Newport 33005</p>
            </div>
            <div>
                <span>Phone</span>
                <p>(005) 200-6555</p>
            </div>
        </div>
    </div>
    <div className="customer-card">
        <div className="customer-head">
            <svg className="img"
                viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.8" 
                strokeLinecap="round"><circle cx="12" cy="8" 
                r="4"/><path d="M4 21v-1a8 8 0 0 1 16 0v1"/>
            </svg>
            <div>
                <h4>Ahmed</h4>
                <small>12 orders · $1500</small>
            </div>
        </div>
        <div className="customer-body">
            <div>
                <span>Address</span>
                <p>633 Oxford Ct, Newport 33005</p>
            </div>
            <div>
                <span>Phone</span>
                <p>(005) 200-6555</p>
            </div>
        </div>
    </div>
</div>
</>
)
}
export default CustomersPage;