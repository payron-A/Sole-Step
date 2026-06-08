import '/src/styles/filterbar.css';
function FilterBar(){
    return(
        <aside>
            <div className="sidebar-sec">
                <div className="sidebar-title">Categories</div>
                <a className="slink active">All Products</a>
                <a className="slink">Women Shoes</a>
                <a className="slink">Kids Shoes</a>
                <a className="slink">Socks</a>
                <a className="slink">Best Sellers</a>
                <a className="slink">Sale</a>
            </div>
            <div className="sidebar-sec">
                <div className="sidebar-title">Filter By Size</div>
                <div className="size-grid">
                <button className="sz-btn">5</button>
                <button className="sz-btn act">6</button>
                <button className="sz-btn">7</button>
                <button className="sz-btn">8</button>
                <button className="sz-btn">9</button>
                <button className="sz-btn">10</button>
                <button className="sz-btn">XS</button>
                <button className="sz-btn">S</button>
                <button className="sz-btn">M</button>
                <button className="sz-btn">L</button>
                </div>
            </div>
            <div className="sidebar-sec">
                <div className="sidebar-title">Price Range</div>
                <input type="range" min="0" max="500"
                       className="range-slider"
                       onInput={(e)=>{
                        e.target.nextElementSibling.lastChild.textContent='$'+e.target.value
                       }}/>
                <div className="price-lbl"><span>$0</span><span>$350</span></div>
            </div>
            <div className="sidebar-sec">
                <div className="sidebar-title">Color</div>
                <div className="swatches">
                <div className="swatch act" style={{background:"#1a1a1a"}} title="Black"></div>
                <div className="swatch" style={{background:"#f5f5f5",boxShadow:"inset 0 0 0 1px #ddd"}} title="White"></div>
                <div className="swatch" style={{background:"#c9a0a8"}} title="Pink"></div>
                <div className="swatch" style={{background:"#8b6e5a"}} title="Brown"></div>
                <div className="swatch" style={{background:"#4a6fa5"}} title="Blue"></div>
                <div className="swatch" style={{background:"#e8b4bc"}} title="Rose"></div>
                </div>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:"7px"}} className="sidebar-sec">
                <div className="sidebar-title">Material</div>
                <label className="mat-chk"><input type="checkbox" checked/> Leather</label>
                <label className="mat-chk"><input type="checkbox"/> Canvas</label>
                <label className="mat-chk"><input type="checkbox"/> Knit</label>
                <label className="mat-chk"><input type="checkbox"/> Cotton</label>
            </div>
    </aside>
    )
}
export default FilterBar;