import { useRef, useState } from "react";

function CustomersPage({display,customers,addCustomer,removeCustomer,toggleCustomerStatus}){

// _____ STATE _____
    const [search,setSearch] = useState("");
    const [showAddForm,setShowAddForm] = useState(false);

    const nameRef = useRef(null);
    const addressRef = useRef(null);
    const phoneRef = useRef(null);

    const visibleCustomers = customers.filter(c =>
        c.name.toLowerCase().includes(search.trim().toLowerCase())
    );

    function handleAddCustomer(e){
        e.preventDefault();
        const name = nameRef.current.value.trim();
        if(!name) return;
        addCustomer({
            name,
            adress: addressRef.current.value.trim(),
            phone: phoneRef.current.value.trim(),
        });
        nameRef.current.value = "";
        addressRef.current.value = "";
        phoneRef.current.value = "";
        setShowAddForm(false);
    }

    return (

<section className="page"style={{display:display}}>
    <div className="toolbar">
        <div className="search-box">
            <svg viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="10.5" cy="10.5" r="6.5"/><path d="M21 21l-4.3-4.3"/>
            </svg>
            <input placeholder="Search customers…"
                onChange={(e)=>setSearch(e.target.value)}/>
        </div>
        <div className="toolbar-actions">
            <button className="toolbar-btn"
                    title="Add customer"
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
              onSubmit={handleAddCustomer}>
            <label className="field" style={{flex:"1 1 160px"}}>
                <span>Name</span>
                <input ref={nameRef} placeholder="Full name" required/>
            </label>
            <label className="field" style={{flex:"1 1 220px"}}>
                <span>Address</span>
                <input ref={addressRef} placeholder="Address"/>
            </label>
            <label className="field" style={{flex:"1 1 160px"}}>
                <span>Phone</span>
                <input ref={phoneRef} placeholder="Phone number"/>
            </label>
            <button className="btn-ghost danger" type="submit">Add</button>
        </form>
    }

    <div className="customer-grid">
        {visibleCustomers.map((customer)=>
        <div className="customer-card" key={customer.id}>
            <div className="customer-head">
                <svg className="img"
                    viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="1.8"
                    strokeLinecap="round"><circle cx="12" cy="8"
                    r="4"/><path d="M4 21v-1a8 8 0 0 1 16 0v1"/>
                </svg>
                <div>
                    <h4>{customer.name}</h4>
                    <small>{customer.orders ?? 0} orders · ${customer.totalSpent ?? 0}</small>
                </div>
                <div className={`status ${customer.status === "blocked" ? "warn" : "ok"}`}
                     style={{marginLeft:"auto"}}>
                    {customer.status === "blocked" ? "Blocked" : "Active"}
                </div>
            </div>
            <div className="customer-body">
                <div>
                    <span>Address</span>
                    <p>{customer.adress || "—"}</p>
                </div>
                <div>
                    <span>Phone</span>
                    <p>{customer.phone || "—"}</p>
                </div>
                <div className="row-actions" style={{marginTop:"10px",display:"flex",justifyContent:"flex-end"}}>
                <button className="btn-ghost"
                        onClick={()=>toggleCustomerStatus(customer.id)}>
                    {customer.status === "blocked" ? "Unblock" : "Block"}
                </button>
                <button className="btn-ghost danger"
                        onClick={()=>{
                            if(confirm(`Remove customer "${customer.name}"?`)){
                                removeCustomer(customer.id)
                            }
                        }}>
                    Remove
                </button>
            </div>
            </div>
        </div>
        )}
        {visibleCustomers.length === 0 &&
            <p style={{color:"var(--taupe)"}}>No customers match your search.</p>
        }
    </div>
</section>
)
}
export default CustomersPage;
