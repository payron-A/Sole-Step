import { useState } from "react";

function InventoryPage({display,products,setPage,restockProduct}){

// _____ STATE _____
    const [search,setSearch] = useState("");

    const lowStock = products.filter(p => +p.stock < 5);
    const visible = lowStock.filter(p =>
        p.name.toLowerCase().includes(search.trim().toLowerCase())
    );

    return (
<section className="page"style={{display:display}}>
    <div className="toolbar">
        <div className="search-box">
            <svg viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M21 21l-4.3-4.3"/>
            </svg>
            <input placeholder="Search low-stock products…"
                onChange={(e)=>setSearch(e.target.value)}/>
        </div>
        <div className="toolbar-actions">
            <button className="toolbar-btn"
                    title="Add product"
                    onClick={()=>setPage("Add Product")}>
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
                {visible.map((pro,i)=>
                <tr key={i}>
                    <td>
                        <span className="cell-thumb">
                            <svg viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8l9-5 9 5-9 5-9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/>
                            </svg>
                        </span>
                    </td>
                    <td>{pro.name}</td>
                    <td>{pro.stock ?? 0}</td>
                    <td>
                        <div className={`status ${+pro.stock >= 5 ? "ok" : "warn"}`}>
                            {+pro.stock >= 5 ? "Active" : "Low Stock"}
                        </div>
                    </td>
                    <td>
                        <div className="row-actions">
                            <button className="btn-ghost"
                                    title="Add 10 units"
                                    onClick={()=>restockProduct(pro.id, 10)}>
                                Restock +10
                            </button>
                        </div>
                    </td>
                </tr>)}
                {visible.length === 0 &&
                    <tr><td colSpan="5">No low-stock products right now.</td></tr>
                }
            </tbody>
        </table>
    </div>
</section>
)
}
export default InventoryPage;
