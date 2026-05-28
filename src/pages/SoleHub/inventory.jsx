import { useState } from "react";
import { originProducts } from "../../js/products";

function InventoryPage({display}){

// _____ STATE _____
// _____ Products
    const inventoryPro = originProducts.filter(pro => +pro.stock <= 5)
    const [product,setProducts] = useState(inventoryPro);

// _____ Filter _____
// _____ Search Box
    function searchFilter(targetValue){
        const value = targetValue.trim().toLowerCase();
        if(!value.trim())return setProducts(originProducts)
        setProducts(originProducts.filter(pro=>
            pro.name.toLowerCase().includes(value)
        ))
    }
    return (
<section className="page"style={{display:display}}>
    <div className="toolbar">
        <div className="search-box">
            <svg viewBox="0 0 24 24" fill="none" 
                stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M21 21l-4.3-4.3"/>
            </svg>
            <input placeholder="Search products…"
                onChange={(e)=>searchFilter(e.target.value)}/>
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
                {product.map((pro,i)=>
                <tr key={i}>
                    <td>
                        <span className="cell-thumb">
                            <svg viewBox="0 0 24 24" fill="none" 
                                stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8l9-5 9 5-9 5-9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/>
                            </svg>
                        </span>
                    </td>
                    <td>{pro.name}</td>
                    <td>{pro.stock}</td>
                    <td>
                        <div className={`status ${+product.stock>=5?"ok":"warn"}`}>
                            {+product.stock >= 5 ? "Active":"Low Stock"}
                        </div>
                    </td>
                    <td>
                        <div className="row-actions">
                            <button className="icon-btn">
                                <svg viewBox="0 0 24 24" fill="none" 
                                    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20h4L18 10l-4-4L4 16v4z"/>
                                </svg>
                            </button>
                        </div>
                    </td>
                </tr>)}
            </tbody>
        </table>
    </div>
</section>    
)
}
export default InventoryPage;