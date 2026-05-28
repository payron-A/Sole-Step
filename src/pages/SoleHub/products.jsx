import { useRef, useState } from "react";
import { originProducts } from "../../js/products";
import TopFilter from '../../components/filter/topFilter';

function ProductsPage({display,setPage,products,setProducts,removeProduct,setIsEditType,setEditPro,setEditId}){

// _____ STATE _____
// _____ Products when search 
    const [productSearch,setProductSearch] = useState(originProducts);

// _____ get Top navbar to hide it
    const hideFilterbarRef = useRef(null);

// _____ Filters _____
// _____ Search Box
    function searchFilter(targetValue){
         const value = targetValue.trim().toLowerCase();
        if(!value.trim())return setProducts(originProducts)
        setProducts(originProducts.filter(pro=>
            pro.name.toLowerCase().includes(value)
        ))
        productSearch.length > 0?
                setProductSearch(products):
                setProductSearch(originProducts);
    }

// _____ Select Options
    function FilterTop(option){
        const orderPriceProducts = originProducts.sort((a,b)=>
            a.price - b.price
        )
        const highPrice = orderPriceProducts[originProducts.length - 1].price;
        switch(option){
            case "Newest":
                setProducts([...productSearch].filter(pro=>pro.badge == "New"))
                break;
            case "Price: Low to High":
                setProducts([...productSearch].sort((a,b)=>a.price-b.price))

                break;
            case "Price: High to Low":
                setProducts([...productSearch].sort((a,b)=>b.price-a.price))
                break;
            case "Best Sellers":
                setProducts([...productSearch].filter(pro=>pro.price <= (highPrice / 2)))
                break;
        }
    }
    return(
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
            <button className="toolbar-btn"
                    title="filter bar"
                    onClick={()=>
                        hideFilterbarRef.current.classList.toggle("hide")}>
                <svg viewBox="0 0 24 24" 
                    fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h16M7 12h10M10 19h4"/>
                </svg>
            </button>
            <button className="toolbar-btn"
                    title="Add Product"
                    onClick={()=>{
                        setPage("Add Product")
                    }}
                    >
                <svg viewBox="0 0 24 24" 
                    fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/>
                </svg>
            </button>
        </div>
    </div>
    <div className="hidden-filterbar hide"
        ref={hideFilterbarRef}>
            <TopFilter length={products.length}
                    Filtertop={FilterTop}/>
    </div>
    <div className="table-wrap">
        <table className="data-table">
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Stock</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {products.map(((product,i)=>
                    <tr key={i}>
                    <td>
                        <span className="cell-thumb">
                            <svg viewBox="0 0 24 24" 
                                fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8l9-5 9 5-9 5-9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/>
                            </svg>
                        </span>
                    </td>
                    <td style={{fontWeight:"bolder"}}>
                        {product.name}
                    </td>
                    <td>{product.type}</td>
                    <td>{product.stock || 1}</td>
                    <td>{product.price}$</td>
                    <td>
                        <div className={`status ${+product.stock>=5?"ok":"warn"}`}>
                            {+product.stock >= 5 ? "Active":"Low Stock"}
                        </div>
                    </td>
                    <td>
                        <div className="row-actions">
                            <button className="icon-btn" 
                                    title="Edit"
                                    onClick={()=>{
                                        setIsEditType(true)
                                        setEditPro(product)
                                        setEditId(i)
                                        setPage('Add Product')
                                    }}>
                                <svg viewBox="0 0 24 24" fill="none" 
                                    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20h4L18 10l-4-4L4 16v4z"/>
                                </svg>
                            </button>
                            <button className="icon-btn"
                                    title="Remove product"
                                    onClick={()=>{
                                        if(confirm(`Remove "${product.name}"?`)){
                                            removeProduct(product.id)
                                        }
                                    }}>
                                <svg viewBox="0 0 24 24" fill="none" 
                                    stroke="currentColor" strokeWidth="1.8" 
                                    strokeLinecap="round" strokeLinejoin="round"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>
                                </svg>
                            </button>
                        </div>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
</section>)
}
export default ProductsPage;