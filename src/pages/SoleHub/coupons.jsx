import { useRef, useState } from "react";

function CouponsPage({display,coupons,addCoupon,removeCoupon}){

    const [search,setSearch] = useState("");
    const [showAddForm,setShowAddForm] = useState(false);

    const nameRef = useRef(null);
    const codeRef = useRef(null);
    const dateRef = useRef(null);

    const visible = coupons.filter(c =>
        c.name.toLowerCase().includes(search.trim().toLowerCase()) ||
        c.code.toLowerCase().includes(search.trim().toLowerCase())
    );

    function handleAdd(e){
        e.preventDefault();
        const name = nameRef.current.value.trim();
        const code = codeRef.current.value.trim().toUpperCase();
        const expireDate = dateRef.current.value;
        if(!name || !code || !expireDate) return;
        addCoupon({ name, code, expireDate });
        nameRef.current.value = "";
        codeRef.current.value = "";
        dateRef.current.value = "";
        setShowAddForm(false);
    }

    function formatDate(iso){
        if(!iso) return "—";
        return new Date(iso).toLocaleDateString(undefined,{year:"numeric",month:"short",day:"numeric"});
    }

    return (

<section className="page"style={{display:display}}>
<div className="toolbar">
    <div className="search-box">
        <svg viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M21 21l-4.3-4.3"/>
        </svg>
        <input placeholder="Search coupons…"
               onChange={(e)=>setSearch(e.target.value)}/>
    </div>
    <div className="toolbar-actions">
        <button className="toolbar-btn"
                title="Add coupon"
                onClick={()=>setShowAddForm(prev => !prev)}>
            <svg viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/>
            </svg>
        </button>
    </div>
</div>

{showAddForm &&
    <form className="panel"
          style={{display:"flex",gap:"12px",flexWrap:"wrap",alignItems:"end",marginBottom:"16px"}}
          onSubmit={handleAdd}>
        <label className="field" style={{flex:"1 1 160px"}}>
            <span>Name</span>
            <input ref={nameRef} placeholder="Summer sale" required/>
        </label>
        <label className="field" style={{flex:"1 1 140px"}}>
            <span>Code</span>
            <input ref={codeRef} placeholder="SUMMER20" required/>
        </label>
        <label className="field" style={{flex:"1 1 160px"}}>
            <span>Expire date</span>
            <input type="date" ref={dateRef} required/>
        </label>
        <button className="btn-ghost danger" type="submit">Add</button>
    </form>
}

<div className="table-wrap">
    <table className="data-table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Coupon</th>
                <th>Expire date</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {visible.map(coupon =>
                <tr key={coupon.id}>
                    <td>{coupon.name}</td>
                    <td>
                        <span className="coupon-code">{coupon.code}</span>
                    </td>
                    <td>{formatDate(coupon.expireDate)}</td>
                    <td>
                        <div className="row-actions">
                            <button className="icon-btn"
                                    title="Remove coupon"
                                    onClick={()=>{
                                        if(confirm(`Remove coupon "${coupon.name}"?`)){
                                            removeCoupon(coupon.id)
                                        }
                                    }}>
                                <svg viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>
                                </svg>
                            </button>
                        </div>
                    </td>
                </tr>
            )}
            {visible.length === 0 &&
                <tr><td colSpan="4">No coupons match your search.</td></tr>
            }
        </tbody>
    </table>
</div>
</section>

)
}
export default CouponsPage;
