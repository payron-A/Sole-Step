import '/src/styles/filterbar.css';
function TopFilter(){
    return (<div className="shop-topbar">
            <h2 style={{color:"var(--gold)"}}>Shop</h2>
            <div style={{display:"flex",gap:"14px",alignItems:"center"}}>
                <select className="sort-sel">
                    <option>Newest</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Best Sellers</option>
                </select>
                <span style={{fontSize:"13px",color:"var(--taupe)"}}>Show: 20</span>
            </div>
        </div>)
}
export default TopFilter;