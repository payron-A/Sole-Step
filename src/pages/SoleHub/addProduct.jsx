function AddProductPage(){
    return(
<div className="content">
    <section className="page"> 
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
                        <input placeholder="e.g. Nike Air Max"/>
                    </label>
                    <label className="field">
                        <span>Description</span>
                        <textarea rows="4" placeholder="Short product description" style={{resize:"vertical",maxHeight:"300px"}}></textarea>
                    </label>
                    <div className="field-row-2">
                        <label className="field">
                            <span>Price</span>
                            <input type="number" placeholder="0.00"/>
                        </label>
                        <label className="field">
                            <span>Stock</span>
                            <input type="number" placeholder="0"/>
                        </label>
                    </div>
                    <label className="field">
                        <span>Category</span>
                        <select>
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
                <a className="btn-ghost">
                    Cancel
                </a>
                <a className="btn-ghost save">
                    Save product
                </a>
            </div>
        </div>
    </section>
</div>
    )
}
export default AddProductPage;