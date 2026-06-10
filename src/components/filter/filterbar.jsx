
import '/src/styles/filterbar.css';
import { useState } from 'react';
function FilterBar({filter,products}){
    const [activeLink,setActiveLink] = useState("All Product");
    const [activeSize,setActiveSize] = useState(filter.sizes[0]);
    return(
        <aside>
            <div className="sidebar-sec">
                <div className="sidebar-title">{filter.title}</div>
                {filter.filterLinks.map((link,i) =>
                    <div key={i} className={`slink ${activeLink == link?"active":""}`}
                         onClick={()=>{
                            setActiveLink(link);
                            products(link);
                         }}>{link}</div>
                )}
            </div>
            <div className="sidebar-sec">
                <div className="sidebar-title">Filter By Size</div>
                <div className="size-grid">
                
                {filter.sizes.map((size,i)=>
                    <button key={i} className={`sz-btn ${activeSize == size?"act":""}`}
                            onClick={()=>{
                                setActiveSize(size); 
                            }
                            }>{size}</button>
                )}
                </div>
            </div>
            <div className="sidebar-sec">
                <div className="sidebar-title">Price Range</div>
                <input type="range" min="0" max={filter.highPrice}
                       className="range-slider"
                       onInput={(e)=>{
                        e.target.nextElementSibling.lastChild.textContent='$'+e.target.value
                       }}/>
                <div className="price-lbl"><span>$0</span><span>$350</span></div>
            </div>
            <div className="sidebar-sec">
                <div className="sidebar-title">Color</div>
                <div className="swatches">
                {filter.color.map((col,i)=>
                    <div key={i} className={`swatch`} style={{background:`${col}`}} title={col}></div>
                )}
                </div>
            </div>
            {filter.materials?<div style={{display:"flex",flexDirection:"column",gap:"7px"}} className="sidebar-sec" >
                <div className="sidebar-title">Material</div>
                {filter.materials.map((m,i)=>
                <label key={i} className="mat-chk"><input type="checkbox"/>{m}</label>
                )}
            </div>:""}
    </aside>
    )
}
export default FilterBar;