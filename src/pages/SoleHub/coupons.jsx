function CouponsPage(){
    return (
<div className="content">
    <section className="page">

        <div className="toolbar">
            <div className="search-box">
                <svg viewBox="0 0 24 24" fill="none" 
                stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M21 21l-4.3-4.3"/>
                </svg>
                <input placeholder="Search coupons…"/>
                </div>
       <div className="toolbar-actions">
                <button className="toolbar-btn">
                    <svg viewBox="0 0 24 24" 
                        fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/>
                    </svg>
                </button>
            </div>
        </div>
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
                <tr>
                    <td>Summer sale</td>
                    <td>
                        <span className="coupon-code">SUMMER20</span>
                    </td>
                    <td>Aug 30, 2026</td>
        <td>
            <div className="row-actions">
                <button className="icon-btn">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>
                    </svg>
                </button>
            </div>
        </td>
                </tr>
                <tr>
                    <td>New customer</td>
                    <td>
                        <span className="coupon-code">WELCOME10</span>
                        </td>
                        <td>Dec 1, 2026</td>
        <td className="row-actions">
            <div className="row-actions">
                <button className="icon-btn">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>
                    </svg>
                </button>
            </div>
        </td>
                </tr>
                </tbody>
        </table>
        </div>

    </section>
</div>
    )
}
export default CouponsPage;