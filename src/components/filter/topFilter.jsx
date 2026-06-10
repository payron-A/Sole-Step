import '/src/styles/filterbar.css';
function TopFilter({title,length,Filtertop}){
    return (<div className="shop-topbar">
            <h2 style={{color:"var(--gold)"}}>{title}</h2>
            <div style={{display:"flex",gap:"14px",alignItems:"center"}}>
                <select className="sort-sel" onChange={(e)=>{Filtertop(e.target.value)}}>
                    <option>Newest</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Best Sellers</option>
                </select>
                <span style={{fontSize:"13px",color:"var(--taupe)"}}>Show: {length}</span>
            </div>
        </div>)
}
export default TopFilter;