import { useRef} from "react";
function AddProductPage({display,setPage,manageProduct,isEditType,editPro}){
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const priceRef = useRef(null);
    const stockRef = useRef(null);
    const categoryRef = useRef(null);
    const typeRef = useRef(null);
    if(isEditType){
        titleRef.current.value = editPro.name;
        descriptionRef.current.value = "";
        priceRef.current.value = editPro.price;
        stockRef.current.value = editPro.stock;
        typeRef.current.value = editPro.type
        categoryRef.current.value = editPro.cat;
    }
    function handleSave(){
        const title = titleRef.current.value.trim();
        const description = descriptionRef.current.value.trim();
        const price = priceRef.current.value.trim();
        const stock = stockRef.current.value.trim();
        const category = categoryRef.current.value;
        const type = typeRef.current.value;

        if(!title || !price)return;

        manageProduct({
            name: title,
            desc: description,
            price: Math.abs(+price),
            stock: Math.abs(+stock) >= 100?99:Math.abs(+stock),
            cat: category.toLowerCase(),
            type: type.toLowerCase(),
            img: 'https://picsum.photos/seed/'+Date.now()+'/400/450',
            badge: 'New',
            stars: 0,
            colors: [],
            size: []
        });


        // reset the form for the next product
        titleRef.current.value = '';
        descriptionRef.current.value = '';
        priceRef.current.value = '';
        stockRef.current.value = '';
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
                    <option>women</option>
                    <option>kids</option>
                </select>
                <span>Type</span>
                <select
                    ref={typeRef}>
                    <option>sneakers</option>
                    <option>boots</option>
                    <option>sandals</option>
                    <option>formal</option>
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
        <button className = "btn-ghost save"
            onClick={handleSave}>
            {!isEditType? "Save Product" : "Edit Product"}
        </button>
    </div>
</div>
</section>
)
}
export default AddProductPage;