import { useRef, useState } from "react";
import { Link } from "react-router-dom";
function AddProductPage({display,setPage}){
    const [IsavilableToSave,setIsavilableToSave] = useState(false);
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const priceRef = useRef(null);
    const stockRef = useRef(null);
    const categoryRef = useRef(null);
    function validValue(){
        if(!titleRef && !descriptionRef &&
           !priceRef && !categoryRef &&
           !stockRef) return false;
        const title = titleRef.current.value.trim();
        const description = descriptionRef.current.value.trim();
        const price = priceRef.current.value.trim();
        const stock = stockRef.current.value.trim();
        const category = categoryRef.current.value;

        setIsavilableToSave(true)
    }
    return(
<section className="page"style={{display:display}}>
<div className="panel form-panel">
    <div className="form-tabs">
        <span className="form-tab active">
            Details
        </span>
        <span className="form-tab">
            Images
        </span>
        <span className="form-tab">
            Categories
        </span>
    </div>
    <div className="form-grid">
        <div className="form-col">
            <label className="field">
                <span>Product title</span>
                <input placeholder="e.g. Nike Air Max"
                       ref={titleRef}/>
            </label>
            <label className="field">
                <span>Description</span>
                <textarea 
                    ref={descriptionRef}
                    rows="4" placeholder="Short product description" style={{resize:"vertical",maxHeight:"300px"}}>
                </textarea>
            </label>
            <div className="field-row-2">
                <label className="field">
                    <span>Price</span>
                    <input type="number" placeholder="0.00"
                           ref={priceRef}/>
                </label>
                <label className="field">
                    <span>Stock</span>
                    <input type="number" placeholder="0"
                           ref={stockRef}/>
                </label>
            </div>
            <label className="field">
                <span>Category</span>
                <select
                    ref={categoryRef}>
                    <option>Sneakers</option>
                    <option>Boots</option>
                    <option>Sandals</option>
                    <option>Formal</option>
                </select>
            </label>
        </div>
        <div className="form-col">
            <span className="field-label">Image</span>
            <div className="image-drop">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                    strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 16V4M7 9l5-5 5 5"/><path d="M4 20h16"/>
                </svg>
                <p>Choose product Image</p>
                <button className="btn-ghost">Upload</button>
            </div>
        </div>
    </div>
    <div className="form-actions">
        <a 
            onClick={()=>setPage("Products")}
            className="btn-ghost">
            Cancel
        </a>
        <button className={`btn-ghost ${IsavilableToSave?"save":"danger"}`}
            onClick={()=>{
                validValue()
            }}>
            Save product
        </button>
    </div>
</div>
</section>
)
}
export default AddProductPage;