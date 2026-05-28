import { useState } from "react";
import { allCustomers } from "../../js/customers";

function CustomersPage({display}){
// _____ STATE _____
// _____ Customers
    const [customer,setCustomers] = useState(allCustomers);

// _____ Filter _____
// _____ Search Box
    function searchFilter(targetValue){
            const value = targetValue.trim().toLowerCase();
            if(!value.trim())return setCustomers(allCustomers)
            setCustomers(allCustomers.filter(pro=>
                pro.name.toLowerCase().includes(value)
            ))
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
                onChange={(e)=>searchFilter(e.target.value)}/>
        </div>
    </div>
    <div className="customer-grid">
        {customer.map((customer,i)=>
        <div className="customer-card" key={i}>
            <div className="customer-head">
                <svg className="img"
                    viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="1.8" 
                    strokeLinecap="round"><circle cx="12" cy="8" 
                    r="4"/><path d="M4 21v-1a8 8 0 0 1 16 0v1"/>
                </svg>
                <div>
                    <h4>{customer.name}</h4>
                    <small>12 orders · $1500</small>
                </div>
            </div>
            <div className="customer-body">
                <div>
                    <span>Address</span>
                    <p>{customer.adress}</p>
                </div>
                <div>
                    <span>Phone</span>
                    <p>{customer.phone}</p>
                </div>
            </div>
        </div>
        )}
    </div>
</section>
)
}
export default CustomersPage;