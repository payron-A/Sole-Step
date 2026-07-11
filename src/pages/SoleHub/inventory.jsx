function InventoryPage(){
    return (
<div className="content">
    <section className="page">
        <div className="toolbar">
            <div className="search-box">
                <svg viewBox="0 0 24 24" fill="none" 
                    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M21 21l-4.3-4.3"/>
                </svg>
                <input placeholder="Search products…"/>
            </div>
            <div className="toolbar-actions">
                <button className="toolbar-btn">
                    <svg viewBox="0 0 24 24" 
                        fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/>
                    </svg>
                </button>
            </div>
        </div>
        <div className="table-wrap">
            <table className="data-table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Stock</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <span className="cell-thumb">
                                <svg viewBox="0 0 24 24" fill="none" 
                                    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8l9-5 9 5-9 5-9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/>
                                </svg>
                            </span>
                        </td>
                        <td>Nike Air Max</td>
                        <td>3</td>
                        <td>
                            <div className="status warn">
                                Low Stock
                            </div>
                        </td>
                        <td>
                            <div className="row-actions">
                                <button className="icon-btn">
                                    <svg viewBox="0 0 24 24" fill="none" 
                                        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20h4L18 10l-4-4L4 16v4z"/>
                                    </svg>
                                </button>
                                <button className="icon-btn">
                                    <svg viewBox="0 0 24 24" fill="none" 
                                        stroke="currentColor" strokeWidth="1.8" 
                                        strokeLinecap="round" strokeLinejoin="round"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>
                                    </svg>
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className="cell-thumb">
                                <svg viewBox="0 0 24 24" fill="none" 
                                    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8l9-5 9 5-9 5-9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/>
                                </svg>
                            </span>
                        </td>
                        <td>Nike Air Max</td>
                        <td>3</td>
                        <td>
                            <div className="status ok">
                                Active
                            </div>
                        </td>
                        <td>
                            <div className="row-actions">
                                <button className="icon-btn">
                                    <svg viewBox="0 0 24 24" fill="none" 
                                        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20h4L18 10l-4-4L4 16v4z"/>
                                    </svg>
                                </button>
                                <button className="icon-btn">
                                    <svg viewBox="0 0 24 24" fill="none" 
                                        stroke="currentColor" strokeWidth="1.8" 
                                        strokeLinecap="round" strokeLinejoin="round"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>
                                    </svg>
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</div>
    )
}
export default InventoryPage;